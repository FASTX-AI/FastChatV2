'use client';

// import { Image } from '@lobehub/ui';
import { createStyles } from 'antd-style';
// import Link from 'next/link';
import { memo } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

const useStyles = createStyles(({ token, css }) => ({
  logoLink: css`
    height: 20px;
    color: inherit;

    &:hover {
      color: ${token.colorLink};
    }
  `,
}));

const BrandWatermark = memo<Omit<FlexboxProps, 'children'>>(({ style, ...rest }) => {
  const { theme } = useStyles();
  // const { styles, theme } = useStyles();
  return (
    <Flexbox
      align={'center'}
      flex={'none'}
      gap={4}
      horizontal
      style={{ color: theme.colorTextDescription, fontSize: 12, ...style }}
      {...rest}
    >
      <span>Powered by FastGPT.</span>
      {/* TODO: 隐藏LOGO */}
      {/* <Link className={styles.logoLink} href="/">
        <Image size={20} src="/images/logo.png" />
      </Link> */}
    </Flexbox>
  );
});

export default BrandWatermark;
