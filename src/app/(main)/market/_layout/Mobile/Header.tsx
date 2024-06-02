'use client';

import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

import { mobileHeaderSticky } from '@/styles/mobileHeader';

const Header = memo(() => {
  return (
    <MobileNavBar
      center={<div style={{ fontSize: 20, fontWeight: 900 }}>Discover</div>}
      style={mobileHeaderSticky}
    />
  );
});

export default Header;
