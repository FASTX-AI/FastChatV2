export interface SunoTask {
  description: string; // 任务描述
  failReason?: string | null; // 失败原因
  finishTime: number; // 结束时间, 假设是时间戳
  id: string; // ID
  imageUrl: string; // 图片url
  progress: string; // 任务进度
  prompt: string; // 提示词
  promptEn: string; // 提示词-英文
  startTime: number; // 开始执行时间, 假设是时间戳
  state?: string | null; // 自定义参数
  status: 'NOT_START' | 'SUBMITTED' | 'IN_PROGRESS' | 'FAILURE' | 'SUCCESS'; // 任务状态
  submitTime: number; // 提交时间, 假设是时间戳
}
