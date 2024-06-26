'use client';

import { ChatHeader } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {
  return (
    <ChatHeader
      left={
        <h2 style={{ fontSize: 24, fontWeight: 900, lineHeight: 1, marginBottom: 0 }}>FastGPT</h2>
      }
    />
  );
});

export default Header;
