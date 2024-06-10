import { MidjourneyTask } from '@/types/midjourneyTask';

export interface MidjourneyState {
  activeTaskId?: string;
  appInited?: boolean;
  createTaskLoading?: boolean;
  inLobeChat?: boolean;
  isAPIKeySettingsModalOpen: boolean;
  prompts: string;
  referenceImageUrl?: string;
  requestError?: { body: string | { type: string }; message: string; status: number };
  runningTaskIds: string[];
  tasks: MidjourneyTask[];
}

export const initialState: MidjourneyState = {
  appInited: false,
  inLobeChat: false,
  isAPIKeySettingsModalOpen: false,
  prompts: '',
  runningTaskIds: [],
  tasks: [],
};
