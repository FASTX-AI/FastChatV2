import { SunoTask } from '@/types/sunoTask';

export interface SunoState {
  activeTaskId?: string;
  createTaskLoading?: boolean;
  isAPIKeySettingsModalOpen: boolean;
  prompts: string;
  runningTaskIds: string[];
  tasks: SunoTask[];
}

export const initialState: SunoState = {
  isAPIKeySettingsModalOpen: false,
  prompts: '',
  runningTaskIds: [],
  tasks: [],
};
