// import { GridShowcase, Logo } from '@lobehub/ui';
import { PropsWithChildren } from 'react';
import { Flexbox } from 'react-layout-kit';

// import Follow from '@/features/Follow';

// const COPYRIGHT = `© ${new Date().getFullYear()} FastGPT, LLC`;

const DesktopLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Flexbox
        align={'center'}
        gap={24}
        height={'100%'}
        justify={'center'}
        padding={16}
        style={{ overflow: 'hidden', position: 'relative' }}
        width={'100%'}
      >
        {/* TODO: logo 取消 */}
        {/* <Logo size={36} style={{ alignSelf: 'flex-start' }} type={'text'} /> */}
        {children}
        {/* <Flexbox align={'center'} horizontal justify={'space-between'}>
          <span style={{ opacity: 0.5 }}>{COPYRIGHT}</span>
          <Follow />
        </Flexbox> */}
      </Flexbox>
      {/* ↓ cloud slot ↓ */}
      {/* ↑ cloud slot ↑ */}
    </>
  );
};

export default DesktopLayout;
