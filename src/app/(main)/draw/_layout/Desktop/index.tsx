'use client';

import { Flexbox } from 'react-layout-kit';

import ImagePreview from '@/features/Preview';
import PromptInput from '@/features/PromptEditor';
import TaskList from '@/features/TaskList';
import { useMidjourneyStore } from '@/store/midjourney';

import { LayoutProps } from '../type';
import Header from './Header';
import SetKeyModal from './SetKeyModal';

const Layout = ({ children }: LayoutProps) => {
  const [useInitApp] = useMidjourneyStore((s) => [s.useInitApp]);

  useInitApp();

  return (
    <>
      <Flexbox
        height={'100%'}
        id={'lobe-market-container'}
        style={{ position: 'relative' }}
        width={'100%'}
      >
        <Header />
        <Flexbox
          gap={12}
          height={'100%'}
          style={{ maxHeight: 'var(--vh)', overflow: 'hidden', padding: '15px' }}
          width={'100%'}
        >
          <PromptInput />
          <ImagePreview />
          <TaskList />
        </Flexbox>
      </Flexbox>
      <SetKeyModal />
      {/* ↓ cloud slot ↓ */}
      {/* ↑ cloud slot ↑ */}
    </>
  );
};

Layout.displayName = 'DesktopMarketLayout';

export default Layout;
