export type BuyItem = {
  description: string;
  href: string;
  id: number;
  name: string;
  prize: number;
  tagList: string[];
};

export interface BuyResponse {
  code: number;
  items: BuyItem[];
  message: string;
}
