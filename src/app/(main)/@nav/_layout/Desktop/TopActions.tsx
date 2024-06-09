import { ActionIcon } from '@lobehub/ui';
import { Gem, LucideMusic4, LucideScanSearch, MessageSquare, Palette } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PAY_SITE } from '@/const/url';
import { useGlobalStore } from '@/store/global';
import { SidebarTabKey } from '@/store/global/initialState';
import { useSessionStore } from '@/store/session';

export interface TopActionProps {
  tab?: SidebarTabKey;
}

const TopActions = memo<TopActionProps>(({ tab }) => {
  const { t } = useTranslation('common');
  const switchBackToChat = useGlobalStore((s) => s.switchBackToChat);
  // TODO: 这里可以增加tabBar
  return (
    <>
      <Link
        aria-label={t('tab.chat')}
        href={'/chat'}
        onClick={(e) => {
          e.preventDefault();
          switchBackToChat(useSessionStore.getState().activeId);
        }}
      >
        <ActionIcon
          active={tab === SidebarTabKey.Chat}
          icon={MessageSquare}
          placement={'right'}
          size="large"
          title={t('tab.chat')}
        />
      </Link>
      <Link aria-label={t('tab.music')} href={'/music'}>
        <ActionIcon
          active={tab === SidebarTabKey.Music}
          icon={LucideMusic4}
          placement={'right'}
          size="large"
          title={t('tab.music')}
        />
      </Link>
      <Link aria-label={t('tab.draw')} href={'/draw'}>
        <ActionIcon
          active={tab === SidebarTabKey.Draw}
          icon={Palette}
          placement={'right'}
          size="large"
          title={t('tab.draw')}
        />
      </Link>
      <Link aria-label={t('tab.market')} href={'/market'}>
        <ActionIcon
          active={tab === SidebarTabKey.Market}
          icon={LucideScanSearch}
          placement={'right'}
          size="large"
          title={t('tab.market')}
        />
      </Link>
      <Link aria-label={t('tab.buy')} href={PAY_SITE}>
        <ActionIcon icon={Gem} placement={'right'} size="large" title={t('tab.buy')} />
      </Link>
    </>
  );
});

export default TopActions;
