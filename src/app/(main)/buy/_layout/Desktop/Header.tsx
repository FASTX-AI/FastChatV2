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
        <h1 style={{ fontSize: 32, fontWeight: 900, lineHeight: 1, marginBottom: 0 }}>FastChat</h1>
      }
    />
  );
});

export default Header;
