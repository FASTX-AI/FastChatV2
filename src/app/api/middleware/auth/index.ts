import { AuthObject } from '@clerk/backend/internal';
import { getAuth } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';

import { createErrorResponse } from '@/app/api/errorResponse';
import { FAST_GPT_AUTH_HEADER, JWTPayload, OAUTH_AUTHORIZED, enableClerk } from '@/const/auth';
import { AgentRuntimeError, ChatCompletionErrorPayload } from '@/libs/agent-runtime';
import { ChatErrorType } from '@/types/fetch';

import { checkAuthMethod, getJWTPayload } from './utils';

type RequestOptions = { params: { provider: string } };

export type RequestHandler = (
  req: Request,
  options: RequestOptions & { jwtPayload: JWTPayload },
) => Promise<Response>;

export const checkAuth =
  (handler: RequestHandler) => async (req: Request, options: RequestOptions) => {
    let jwtPayload: JWTPayload;

    try {
      // get Authorization from header
      const authorization = req.headers.get(FAST_GPT_AUTH_HEADER);
      const oauthAuthorized = !!req.headers.get(OAUTH_AUTHORIZED);

      if (!authorization) throw AgentRuntimeError.createError(ChatErrorType.Unauthorized);

      // check the Auth With payload and clerk auth
      let clerkAuth = {} as AuthObject;

      if (enableClerk) {
        clerkAuth = getAuth(req as NextRequest);
      }

      jwtPayload = await getJWTPayload(authorization);

      // 这里换成设备信息
      // 如果当前的 IP 和 redis 的 IP 不匹配，直接返回一个提示，行号在其他地方登录，已切换到当前 IP；
      // TODO: REDIS 的逻辑就是用当前的 SK 和 IP 覆盖之前的老数据就行；
      // const response = await fetch('/');
      // 如果异常；服务端返回一个 1 即可；如果和当前 IP 匹配，返回 0 即可
      // {
      //   code: 200,
      //   message: 'same device',
      //   data: 0
      // }
      // {
      //   code: 200,
      //   message: '设置地址已更换为当前设备，设备切换过多可能导致封号处理，请不要分享 KEY 给他人使用。',
      //   data: 1
      // }
      console.log(jwtPayload.apiKey, req.headers.get('user-agent'));
      // const response = await fetch(jwtPayload.apiKey, req.headers.get('user-agent'));

      checkAuthMethod({
        accessCode: jwtPayload.accessCode,
        apiKey: jwtPayload.apiKey,
        clerkAuth,
        nextAuthAuthorized: oauthAuthorized,
      });
    } catch (e) {
      const {
        errorType = ChatErrorType.InternalServerError,
        error: errorContent,
        ...res
      } = e as ChatCompletionErrorPayload;

      const error = errorContent || e;

      return createErrorResponse(errorType, { error, ...res, provider: options.params?.provider });
    }

    return handler(req, { ...options, jwtPayload });
  };
