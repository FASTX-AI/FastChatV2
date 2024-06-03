FROM node:20-slim AS base

RUN apt update && apt install -y python3 python3-dev python3-pip

## Sharp dependencies, copy all the files for production
FROM base AS sharp
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

RUN pnpm add sharp

## Install dependencies only when needed
FROM base AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json ./
COPY .npmrc ./
# COPY node_modules ./

# If you want to build docker in China
RUN npm config set registry https://registry.npmmirror.com/
RUN pnpm i

COPY . .

ENV NEXT_PUBLIC_BASE_PATH ""

# Sentry
ENV NEXT_PUBLIC_SENTRY_DSN ""
ENV SENTRY_ORG ""
ENV SENTRY_PROJECT ""

# Posthog
ENV NEXT_PUBLIC_ANALYTICS_POSTHOG ""
ENV NEXT_PUBLIC_POSTHOG_KEY ""
ENV NEXT_PUBLIC_POSTHOG_HOST ""

# Umami
ENV NEXT_PUBLIC_ANALYTICS_UMAMI ""
ENV NEXT_PUBLIC_UMAMI_SCRIPT_URL ""
ENV NEXT_PUBLIC_UMAMI_WEBSITE_ID ""

# Node
ENV NODE_OPTIONS "--max-old-space-size=8192"

# run build standalone for docker version
RUN pnpm run build:docker

## Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=sharp --chown=nextjs:nodejs /app/node_modules/.pnpm ./node_modules/.pnpm

USER nextjs

EXPOSE 3210

# set hostname to localhost
ENV HOSTNAME "0.0.0.0"
ENV PORT=3210

ENV API_KEY_SELECT_MODE ""
# Google
ENV GOOGLE_API_KEY ""

ENV FEATURE_FLAGS ""
# SSO 单点登录认证 https://manage.auth0.com/welcome/
ENV NEXT_AUTH_SSO_PROVIDERS ""
ENV NEXT_AUTH_SECRET ""
ENV ZITADEL_CLIENT_ID ""
ENV ZITADEL_CLIENT_SECRET ""
ENV ZITADEL_ISSUER ""
# 防爆破密码:
ENV ACCESS_CODE ""
# 永久用户使用的 OpenAPI Key 信息
ENV OPENAI_API_KEY ""
ENV OPENAI_PROXY_URL ""
# 支持的模型
ENV OPENAI_MODEL_LIST ""
# 默认给用户展示的模型
ENV DEFAULT_AGENT_CONFIG ""
# 关闭默认开启的这个模型
ENV ENABLED_OLLAMA ""
ENV PLUGIN_SETTINGS ""

CMD ["node", "server.js"]
