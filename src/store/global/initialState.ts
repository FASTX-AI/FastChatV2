import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { SessionDefaultGroup } from '@/types/session';
import { AsyncLocalStorage } from '@/utils/localStorage';

export enum SidebarTabKey {
  Buy = 'buy',
  Chat = 'chat',
  Draw = 'draw',
  Market = 'market',
  Me = 'me',
  Music = 'music',
  Setting = 'settings',
}

export enum ChatSettingsTabs {
  Chat = 'chat',
  Meta = 'meta',
  Modal = 'modal',
  Plugin = 'plugin',
  Prompt = 'prompt',
  TTS = 'tts',
}

export enum SettingsTabs {
  About = 'about',
  Agent = 'agent',
  Common = 'common',
  LLM = 'llm',
  Sync = 'sync',
  SystemAgent = 'system-agent',
  TTS = 'tts',
}

export interface SystemStatus {
  // which sessionGroup should expand
  expandSessionGroupKeys: string[];
  hidePWAInstaller?: boolean;
  inputHeight: number;
  mobileShowTopic?: boolean;
  sessionsWidth: number;
  showChatSideBar?: boolean;
  showSessionPanel?: boolean;
  showSystemRole?: boolean;
}

export interface GlobalState {
  hasNewVersion?: boolean;
  isMidjourneySettingsModalOpen: boolean;
  isMobile?: boolean;
  isStatusInit?: boolean;
  latestVersion?: string;
  midjourneyRequestError?: {
    body: any;
    message: string;
    status: number;
  };
  router?: AppRouterInstance;
  sidebarKey: SidebarTabKey;
  status: SystemStatus;
  statusStorage: AsyncLocalStorage<SystemStatus>;
}

export const INITIAL_STATUS = {
  expandSessionGroupKeys: [SessionDefaultGroup.Pinned, SessionDefaultGroup.Default],
  hidePWAInstaller: false,
  inputHeight: 150,
  mobileShowTopic: false,
  sessionsWidth: 320,
  showChatSideBar: false,
  showSessionPanel: false,
  showSystemRole: false,
} satisfies SystemStatus;

export const initialState: GlobalState = {
  isMobile: false,
  isStatusInit: false,
  sidebarKey: SidebarTabKey.Chat,
  status: INITIAL_STATUS,
  statusStorage: new AsyncLocalStorage('FASTGPT_SYSTEM_STATUS'),
  isMidjourneySettingsModalOpen: false,
};
