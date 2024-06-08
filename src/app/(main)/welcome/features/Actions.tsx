'use client';

import { Icon } from '@lobehub/ui';
import { Button } from 'antd';
import { SendHorizonal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { PAY_SITE } from '@/const/url';

const Actions = memo<{ mobile?: boolean }>(({ mobile }) => {
  const { t } = useTranslation('welcome');
  const router = useRouter();
  const toBuy = () => {
    window.open(PAY_SITE, '_blank');
  };

  return (
    <Flexbox gap={16} horizontal={!mobile} justify={'center'} width={'100%'} wrap={'wrap'}>
      {/* TODO: 切换到购买页面 */}
      <Button
        block={mobile}
        onClick={toBuy}
        size={'large'}
        style={{ minWidth: 160 }}
        type={'default'}
      >
        {t('button.market')}
      </Button>
      <Button
        block={mobile}
        onClick={() => router.push('/chat')}
        size={'large'}
        style={{ minWidth: 160 }}
        type={'primary'}
      >
        <Flexbox align={'center'} gap={4} horizontal justify={'center'}>
          {t('button.start')}
          <Icon icon={SendHorizonal} />
        </Flexbox>
      </Button>
    </Flexbox>
  );
});

export default Actions;
