'use client';

import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const COPYRIGHT = `© 2021-${new Date().getFullYear()} FastGPT, LLC`;

const Page = memo(({ mobile }: { mobile?: boolean }) => {
  return (
    <Flexbox align={'center'} gap={12} paddingBlock={36} width={'100%'}>
      <h1 style={{ fontSize: mobile ? 32 : 36, fontWeight: 900, lineHeight: 1, marginBottom: 0 }}>
        FastGPT
      </h1>
      <div>Empowering your AI dreams by FastGPT</div>
      <div style={{ fontWeight: 400, opacity: 0.33 }}>{COPYRIGHT}</div>
    </Flexbox>
  );
});

Page.displayName = 'AboutSetting';

export default Page;
