import { DEFAULT_LANG } from '@/const/locale';

import { AgentMarket } from './AgentMarket';

export const runtime = 'edge';

export const revalidate = 3600; // revalidate at almost every hour

export const GET = async (req: Request) => {
  const locale = new URL(req.url).searchParams.get('locale');
  console.log(locale);

  const market = new AgentMarket();

  let res: Response;

  console.log(market.getAgentIndexUrl(locale as any));

  res = await fetch(market.getAgentIndexUrl(locale as any));

  if (res.status === 404) {
    res = await fetch(market.getAgentIndexUrl(DEFAULT_LANG));
  }

  return res;
};
