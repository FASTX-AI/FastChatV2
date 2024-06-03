import create from 'zustand';

import { BuyItem } from '@/types/buy';

type BuyState = {
  addBuyItem: (item: BuyItem) => void;
  itemList: BuyItem[];
};

export const useBuyStore = create<BuyState>((set) => ({
  addBuyItem: (item) => set((state) => ({ itemList: [...state.itemList, item] })),
  itemList: [
    {
      description: '【热销】中，上百款大模型免费用',
      href: 'https://pay.fastgpt.com',
      id: 1,
      name: '立即购买',
      prize: 0,
      tagList: ['已购：9000+份', '限时抢购中...'],
    },
  ],
}));
