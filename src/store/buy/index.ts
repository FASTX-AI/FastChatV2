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
      description: '【热销】永久无限使用 FastChat，支持 GPT 以及100+ AI大模型无限对话',
      href: '',
      id: 1,
      name: '永久权益',
      prize: 1666.66,
      tagList: ['已购：3000+份', '限时抢购中...'],
    },
    {
      description: '【热销】永久无限使用 FastChat，支持 GPT 以及100+ AI大模型无限对话',
      href: '',
      id: 2,
      name: '永久权益',
      prize: 1666.66,
      tagList: ['已购：3000+份', '限时抢购中...'],
    },
    {
      description: '【热销】永久无限使用 FastChat，支持 GPT 以及100+ AI大模型无限对话',
      href: '',
      id: 3,
      name: '永久权益',
      prize: 1666.66,
      tagList: ['已购：3000+份', '限时抢购中...'],
    },
    {
      description: '【热销】永久无限使用 FastChat，支持 GPT 以及100+ AI大模型无限对话',
      href: '',
      id: 4,
      name: '永久权益',
      prize: 1666.66,
      tagList: ['已购：3000+份', '限时抢购中...'],
    },
    {
      description: '【热销】永久无限使用 FastChat，支持 GPT 以及100+ AI大模型无限对话',
      href: '',
      id: 5,
      name: '永久权益',
      prize: 1666.66,
      tagList: ['已购：3000+份', '限时抢购中...'],
    },
  ],
}));
