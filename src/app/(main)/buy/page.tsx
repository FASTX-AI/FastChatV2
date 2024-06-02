import { Flexbox } from 'react-layout-kit';

import StructuredData from '@/components/StructuredData';
import { ldModule } from '@/server/ld';
import { translation } from '@/server/translation';
import { isMobileDevice } from '@/utils/responsive';

import AgentList from './features/AgentList';

const Page = async () => {
  const mobile = isMobileDevice();
  const { t } = await translation('metadata');
  const ld = ldModule.generate({
    description: '',
    title: t('tab.buy'),
    url: '/market',
  });
  return (
    <>
      <StructuredData ld={ld} />
      <Flexbox gap={mobile ? 16 : 24}>
        <AgentList mobile={mobile} />
      </Flexbox>
    </>
  );
};

Page.DisplayName = 'Market';

export default Page;
