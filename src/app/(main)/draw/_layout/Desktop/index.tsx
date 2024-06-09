import { Flexbox } from 'react-layout-kit';


import { LayoutProps } from '../type';
import Header from './Header';

const Layout = ({ children }: LayoutProps) => {
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
          align="center"
          justify="center"
          height={'100%'}
          horizontal
          style={{ position: 'relative' }}
          width={'100%'}
        >
          <h2 style={{ fontSize: 24, fontWeight: 600, lineHeight: 1, margin: 0, color: '#333333' }}>
            仅针对终身会员开放此功能，请联系客服咨询！
          </h2>
        </Flexbox>
      </Flexbox>
      {/* ↓ cloud slot ↓ */}
      {/* ↑ cloud slot ↑ */}
    </>
  );
};

Layout.displayName = 'DesktopMarketLayout';

export default Layout;
