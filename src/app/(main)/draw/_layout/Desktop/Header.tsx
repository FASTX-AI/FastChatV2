'use client';

import { ChatHeader } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {
  const { t } = useTranslation('common');

  return (
    <ChatHeader
      style={{ position: 'relative', zIndex: 0 }}
      left={
        <h2 style={{ fontSize: 24, fontWeight: 900, lineHeight: 1, marginBottom: 0 }}>
          {t('tab.draw')}
        </h2>
      }
    />
  );
});

export default Header;
