// import { lobeChat } from '@lobehub/chat-plugin-sdk/client';
import isEqual from 'fast-deep-equal';
import { StateCreator } from 'zustand';

import { sunoService } from '@/services/sunoService';
// import { storageService } from '@/services/sunoStorage';
import { TaskDispatch, tasksReducer } from '@/store/suno/reducers/task';

// import { SunoTask } from '@/types/sunoTask';
import { SunoStore } from './index';
import { SunoState, initialState } from './initialState';

export interface StoreAction {
  activeTask: (id: string) => void;
  createTask: (data: any) => Promise<void>;
  dispatchTask: (payload: TaskDispatch) => void;
  pollTaskStatus: (id: string) => Promise<void>;
  removeAllTasks: () => void;
  removeTask: (id: string) => void;
  toggleTaskLoading: (id: string, loading: boolean) => void;
  updateAppState: (state: Partial<SunoState>, action?: any) => void;
}

export const actions: StateCreator<SunoStore, [['zustand/devtools', never]], [], StoreAction> = (
  set,
  get,
) => ({
  ...initialState,
  activeTask: (id) => {
    get().updateAppState({ activeTaskId: id }, 'activeTaskId');
  },
  createTask: async (data) => {
    const { dispatchTask, activeTask, pollTaskStatus } = get();

    const resp = await sunoService.post('/generate/description-mode', data);

    console.log(resp);
  },
  dispatchTask: (payload) => {
    const { tasks, updateAppState } = get();

    const nextTasks = tasksReducer(tasks, payload);

    if (isEqual(tasks, nextTasks)) return;

    updateAppState({ tasks: nextTasks }, { payload, type: `dispatchTasks/${payload.type}` });
  },
  pollTaskStatus: async (taskId) => {
    // // const { toggleTaskLoading, dispatchTask } = get();
    // // const task = await sunoService.getTaskById(taskId);
    // // toggleTaskLoading(taskId, true);
    // // let finalTask: SunoTask | undefined;
    // // while (task.status !== 'SUCCESS') {
    // //   // 每间隔 2s 查询一次任务状态
    // //   await new Promise((resolve) => {
    // //     setTimeout(resolve, 2000);
    // //   });
    // //   const task = await SunoService.getTaskById(taskId);
    // //   console.log(`task: ${task.id} [${task.status}] ${task.progress}%`, task.prompt);
    // //   if (task.status === 'SUCCESS') {
    // //     finalTask = task;
    // //     break;
    // //   } else {
    // //     dispatchTask({ id: task.id, task, type: 'updateTask' });
    // //   }
    // }
    // toggleTaskLoading(taskId, false);
    // if (!finalTask) return;
    // dispatchTask({ id: finalTask!.id, task: finalTask, type: 'updateTask' });
  },
  removeAllTasks: () => {
    const tasks = get().tasks;
    for (const task of tasks) get().removeTask(task.id);
  },
  removeTask: (id) => {
    const { dispatchTask, tasks, activeTaskId } = get();

    const index = tasks.findIndex((t) => t.id === id);
    dispatchTask({ id, type: 'deleteTask' });
    if (id !== activeTaskId) return;

    const newItem = get().tasks[index];
    const newIndex = index === 0 ? 0 : index - 1;

    if (newItem) get().activeTask(newItem.id);
    else get().activeTask(tasks[newIndex]?.id || '');
  },
  toggleTaskLoading: (id, loading) => {
    if (loading) {
      set({ runningTaskIds: [...get().runningTaskIds, id] }, false, {
        id,
        loading,
        type: 'toggleTaskLoading',
      });
    } else {
      set(
        {
          runningTaskIds: get().runningTaskIds.filter((taskId) => taskId !== id),
        },
        false,
        { id, loading, type: 'toggleTaskLoading' },
      );
    }
  },

  updateAppState: async (state, action) => {
    set({ ...state }, false, action);
    // await storageService.saveToLocalStorage(state);
  },
});
