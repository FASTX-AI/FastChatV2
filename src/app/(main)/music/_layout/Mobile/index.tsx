import MobileContentLayout from '@/components/server/MobileNavLayout';

import { LayoutProps } from '../type';
import Header from './Header';

const Layout = ({ children }: LayoutProps) => {
  return (
    <MobileContentLayout header={<Header />} style={{ paddingInline: 16, paddingTop: 8 }}>
      {children}
    </MobileContentLayout>
  );
};

Layout.displayName = 'MobileMarketLayout';

export default Layout;
