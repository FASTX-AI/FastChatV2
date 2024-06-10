'use client';

import { message } from 'antd';
import { useGlobalStore } from 'src/store/global';

import { useUserStore } from '@/store/user';
import { keyVaultsConfigSelectors } from '@/store/user/selectors';

class SunoService {
  baseURL = '/api/suno';

  public async fetch(path: string, method: string, data?: any) {
    const openAIKey = keyVaultsConfigSelectors.openAIConfig(useUserStore.getState()).apiKey;

    if (!openAIKey || openAIKey.length === 0) {
      useGlobalStore.setState({
        isAPIKeySettingsModalOpen: true,
      });
      return {};
    }

    console.log(`${this.baseURL}?path=${encodeURIComponent(path)}`, data);

    try {
      const res = await fetch(`${this.baseURL}?path=${encodeURIComponent(path)}`, {
        body: data ? JSON.stringify(data) : undefined,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + openAIKey ?? '',
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

  public async get<U>(path: string): Promise<U> {
    return this.fetch(path, 'GET');
  }

  public async post<D, T>(path: string, data?: D): Promise<T> {
    return this.fetch(path, 'POST', data);
  }
}

export const sunoService = new SunoService();
