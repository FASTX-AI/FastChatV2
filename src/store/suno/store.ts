import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { StoreAction, actions } from './action';
import { SunoState, initialState } from './initialState';

export interface SunoStore extends SunoState, StoreAction {}

export const useSunoStore = createWithEqualityFn<SunoStore>()(
  devtools((...params) => ({ ...initialState, ...actions(...params) }), {
    name: 'SunoStore',
  }),
  shallow,
);
