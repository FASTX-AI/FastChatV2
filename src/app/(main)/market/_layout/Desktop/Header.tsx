'use client';

import { ChatHeader, Image } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {
  const logoImageStyle = {
    backgroundColor: '#00000000',
    border: '0px solid #00000000 !important',
    boxShadow: '0 0 0 0px #00000000 !important',
    height: 'auto',
    width: 150,
  };

  return (
    <ChatHeader
      left={<Image objectFit="contain" src="/images/text-logo.png" style={logoImageStyle} />}
    />
  );
});

export default Header;
