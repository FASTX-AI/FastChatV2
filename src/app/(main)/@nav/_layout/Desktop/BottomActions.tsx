import { ActionIcon } from '@lobehub/ui';
import { Settings } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';

const BottomActions = memo(() => {
  return (
    <>
      <Link aria-label={'Settings'} href={'/settings/common'}>
        <ActionIcon icon={Settings} placement={'right'} title={'Settings'} size="large" />
      </Link>
      {/* <Link aria-label={t('document')} href={DOCUMENTS} target={'_blank'}>
        <ActionIcon icon={Book} placement={'right'} title={t('document')} />
      </Link> */}
    </>
  );
});

export default BottomActions;
