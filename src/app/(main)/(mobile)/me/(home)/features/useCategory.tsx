import { CircleUserRound, Database, Download, Settings2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { CellProps } from '@/components/Cell';
import { enableAuth } from '@/const/auth';
import { usePWAInstall } from '@/hooks/usePWAInstall';
import { useUserStore } from '@/store/user';
import { authSelectors } from '@/store/user/slices/auth/selectors';

import { useCategory as useSettingsCategory } from '../../settings/features/useCategory';

export const useCategory = () => {
  const router = useRouter();
  const { canInstall, install } = usePWAInstall();
  const { t } = useTranslation(['common', 'setting', 'auth']);
  const [isLogin, isLoginWithAuth, isLoginWithClerk] = useUserStore((s) => [
    authSelectors.isLogin(s),
    authSelectors.isLoginWithAuth(s),
    authSelectors.isLoginWithClerk(s),
  ]);

  const profile: CellProps[] = [
    {
      icon: CircleUserRound,
      key: 'profile',
      label: t('userPanel.profile'),
      onClick: () => router.push('/me/profile'),
    },
  ];

  const settings: CellProps[] = [
    {
      icon: Settings2,
      key: 'setting',
      label: t('userPanel.setting'),
      onClick: () => router.push('/me/settings'),
    },
    {
      type: 'divider',
    },
  ];

  const pwa: CellProps[] = [
    {
      icon: Download,
      key: 'pwa',
      label: t('installPWA'),
      onClick: () => install(),
    },
    {
      type: 'divider',
    },
  ];

  const settingsWithoutAuth = [
    ...useSettingsCategory(),
    {
      type: 'divider',
    },
  ];

  const data: CellProps[] = [
    {
      icon: Database,
      key: 'data',
      label: t('userPanel.data'),
      onClick: () => router.push('/me/data'),
    },
  ];

  const mainItems = [
    {
      type: 'divider',
    },
    ...(isLoginWithClerk ? profile : []),
    ...(enableAuth ? (isLoginWithAuth ? settings : []) : settingsWithoutAuth),
    ...(canInstall ? pwa : []),
    ...(isLogin ? data : []),
  ].filter(Boolean) as CellProps[];

  return mainItems;
};
