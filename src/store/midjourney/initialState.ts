import { MidjourneyTask } from '@/types/midjourneyTask';

export interface MidjourneyState {
  activeTaskId?: string;
  appInited?: boolean;
  createTaskLoading?: boolean;
  inLobeChat?: boolean;
  isMidjourneySettingsModalOpen: boolean;
  prompts: string;
  referenceImageUrl?: string;
  requestError?: { body: string | { type: string }; message: string; status: number };
  runningTaskIds: string[];
  tasks: MidjourneyTask[];
}

export const initialState: MidjourneyState = {
  appInited: false,
  inLobeChat: false,
  isMidjourneySettingsModalOpen: false,
  prompts: '',
  runningTaskIds: [],
  tasks: [],
};
