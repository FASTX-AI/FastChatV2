import { SunoStore } from './store';

const isTasksEmpty = (s: SunoStore) => {
  return s.tasks.length === 0;
};

const getTaskById = (id: string) => (s: SunoStore) => {
  return s.tasks.find((s) => s.id === id);
};

const currentActiveTask = (s: SunoStore) => {
  return s.tasks.find((task) => s.activeTaskId === task.id);
};

const currentTaskProgress = (s: SunoStore) => {
  const task = currentActiveTask(s);
  if (!task) return 0;

  return Number.parseInt(task.progress || '0');
};

const isAnyTaskRunning = (s: SunoStore) => {
  return s.runningTaskIds.length > 0;
};
const isCurrentTaskRunning = (s: SunoStore) => {
  const task = currentActiveTask(s);
  if (!task) return false;
  return s.runningTaskIds.includes(task.id);
};

const isCreatingTaskLoading = (s: SunoStore) => s.createTaskLoading;

const isTaskActive = (id: string) => (s: SunoStore) => {
  return getTaskById(id)(s)?.id === s.activeTaskId;
};
const hasMultiTasks = (s: SunoStore) => s.tasks.length > 1;

const showProgress = (s: SunoStore) => {
  const progress = currentTaskProgress(s);
  return isCurrentTaskRunning(s) && progress !== 100;
};

export const SunoSelectors = {
  currentActiveTask,
  currentTaskProgress,
  getTaskById,
  hasMultiTasks,
  isAnyTaskRunning,
  isCreatingTaskLoading,
  isCurrentTaskRunning,
  isTaskActive,
  isTasksEmpty,
  showProgress,
};
