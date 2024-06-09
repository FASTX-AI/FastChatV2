import { Flexbox } from 'react-layout-kit';

import StructuredData from '@/components/StructuredData';
import { ldModule } from '@/server/ld';
import { translation } from '@/server/translation';
import { isMobileDevice } from '@/utils/responsive';

const Page = async () => {
  const mobile = isMobileDevice();
  const { t } = await translation('metadata');
  const ld = ldModule.generate({
    description: '',
    title: t('tab.music'),
    url: '/music',
  });
  return (
    <>
      <StructuredData ld={ld} />
      <Flexbox gap={mobile ? 16 : 24}></Flexbox>
    </>
  );
};

Page.DisplayName = 'Market';

export default Page;
