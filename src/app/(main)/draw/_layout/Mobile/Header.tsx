'use client';

import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { mobileHeaderSticky } from '@/styles/mobileHeader';

const Header = memo(() => {
  const { t } = useTranslation('common');
  return (
    <MobileNavBar
      center={<div style={{ fontSize: 20, fontWeight: 900 }}>{t('tab.draw')}</div>}
      style={mobileHeaderSticky}
    />
  );
});

export default Header;
