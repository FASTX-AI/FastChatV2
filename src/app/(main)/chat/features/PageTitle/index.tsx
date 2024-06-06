'use client';

import { memo } from 'react';

import PageTitle from '@/components/PageTitle';
import { useSessionStore } from '@/store/session';
import { sessionMetaSelectors } from '@/store/session/selectors';

const Title = memo(() => {
  const [title] = useSessionStore((s) => [sessionMetaSelectors.currentAgentTitle(s)]);

  return <PageTitle title={[title].filter(Boolean).join(' ')} />;
});
export default Title;
