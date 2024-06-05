'use client';

import { Divider } from 'antd';
import { memo } from 'react';

const Footer = memo(() => {
  return (
    <Divider>
      <p style={{ fontSize: 14 }}>✨ 欢迎体验 FastGPT ✨</p>
    </Divider>
  );
});

export default Footer;
