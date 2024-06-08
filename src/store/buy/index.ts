import create from 'zustand';

import { PAY_SITE } from '@/const/url';
import { BuyItem } from '@/types/buy';

type BuyState = {
  addBuyItem: (item: BuyItem) => void;
  itemList: BuyItem[];
};

export const useBuyStore = create<BuyState>((set) => ({
  addBuyItem: (item) => set((state) => ({ itemList: [...state.itemList, item] })),
  itemList: [
    {
      description: '【热销中】上百款大模型免费用，更开放永久使用权限购买',
      href: PAY_SITE,
      id: 1,
      name: '点击卡片，立即购买',
      prize: 0,
      tagList: ['已售出：9000+份', '限时抢购中...'],
    },
  ],
}));
