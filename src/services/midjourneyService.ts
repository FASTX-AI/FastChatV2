'use client';

import { message } from 'antd';
import { useGlobalStore } from 'src/store/global';

import { useUserStore } from '@/store/user';
import { keyVaultsConfigSelectors } from '@/store/user/selectors';
import { MidjourneyTask } from '@/types/midjourneyTask';

interface DescribeDTO {
  base64: string;
  notifyHook?: string;
  state?: string;
}
interface DescribeResponse {
  code: 1;
  description: string;
  result: number;
}

export interface SimpleChangeTaskDTO {
  id: string;
  index: string;
  type: 'UPSCALE' | 'VARIATION';
}

export interface ChangeTaskDTO {
  action: 'UPSCALE' | 'VARIATION' | 'REROLL';
  index?: number;
  taskId: string;
}

interface SimpleChangeResponse {
  code: 1;
  description: string;
  result: string;
}

interface TaskConditionDTO {
  ids?: string[];
}

type TaskListResponse = MidjourneyTask[];

type Account = {
  // ...账号的属性
};

type AccountResponse = Account;

interface ImagineDTO {
  base64Array?: [];
  notifyHook?: string;
  prompt: string;
  state?: string;
}

interface ImagineResponse {
  code: 1;
  description: string;
  result: string;
}

class MidjourneyService {
  baseURL = '/api/midjourney';

  private async fetch(path: string, method: string, data?: any) {
    const openAIKey = keyVaultsConfigSelectors.openAIConfig(useUserStore.getState()).apiKey;

    if (!openAIKey || openAIKey.length === 0) {
      useGlobalStore.setState({
        isAPIKeySettingsModalOpen: true,
      });
      return {};
    }

    try {
      const res = await fetch(`${this.baseURL}?path=${encodeURIComponent(path)}`, {
        body: data ? JSON.stringify(data) : undefined,
        headers: {
          'Content-Type': 'application/json',
          'Mj-Api-Secret': openAIKey ?? '',
        },
        method,
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body?.error?.message);
      }

      return res.json();
    } catch (error) {
      message.error((error as Error).message);
      return {};
    }
  }

  private async get<U>(path: string): Promise<U> {
    return this.fetch(path, 'GET');
  }

  private async post<D, T>(path: string, data?: D): Promise<T> {
    return this.fetch(path, 'POST', data);
  }

  async createImagineTask({ prompt, base64Array }: ImagineDTO) {
    const data: ImagineResponse = await this.post('/mj/submit/imagine', { base64Array, prompt });

    return data.result;
  }

  async createDescribeTask({ base64, notifyHook, state }: DescribeDTO) {
    const data: DescribeResponse = await this.post('/mj/submit/describe', {
      base64,
      notifyHook,
      state,
    });
    return data.result;
  }

  async createSimpleChangeTask({ id, index, type }: SimpleChangeTaskDTO) {
    // e.g. 1320098173412546 U2
    const content = `${id} ${type[0]}${index}`;

    const data: SimpleChangeResponse = await this.post('/mj/submit/simple-change', { content });
    return data.result;
  }

  async createChangeTask({ taskId, index, action }: ChangeTaskDTO) {
    const data: SimpleChangeResponse = await this.post('/mj/submit/change', {
      action,
      index,
      taskId,
    });

    return data.result;
  }

  async listTasks() {
    const data: TaskListResponse = await this.get('/mj/task/list');
    return data;
  }

  async listTasksByCondition({ ids }: TaskConditionDTO) {
    const data: TaskListResponse = await this.post('/mj/task/list-by-condition', {
      ids,
    });
    return data;
  }

  async getTaskById(id: string) {
    const data: MidjourneyTask = await this.get(`/mj/task/${id}/fetch`);
    return data;
  }

  async listAccounts() {
    const data: AccountResponse[] = await this.get('/mj/account/list');
    return data;
  }

  async getAccountById(id: string) {
    const data: Account = await this.get(`/mj/account/${id}/fetch`);
    return data;
  }
}

export const midjourneyService = new MidjourneyService();
