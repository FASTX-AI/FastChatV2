import { z } from 'zod';

export type DBModel<T> = T & {
  createdAt: number;
  id: string;
  updatedAt: number;
};

export const DBBaseFieldsSchema = z.object({
  createdAt: z.number().or(z.string()),
  id: z.string(),
  updatedAt: z.number().or(z.string()),
});

export const FAST_GPT_LOCAL_DB_NAME = 'FAST_GPT_DB';
