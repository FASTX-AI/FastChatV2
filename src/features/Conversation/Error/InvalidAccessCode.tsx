import { Icon } from '@lobehub/ui';
import { Segmented } from 'antd';
import { SegmentedLabeledOption } from 'antd/es/segmented';
import { AsteriskSquare, KeySquare, ScanFace } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useServerConfigStore } from '@/store/serverConfig';
import { serverConfigSelectors } from '@/store/serverConfig/selectors';

import APIKeyForm from './APIKeyForm';
import AccessCodeForm from './AccessCodeForm';
import OAuthForm from './OAuthForm';
import { ErrorActionContainer } from './style';

enum Tab {
  Api = 'api',
  Oauth = 'oauth',
  Password = 'password',
}

interface InvalidAccessCodeProps {
  id: string;
  onBuyClick: () => void;
  provider?: string;
}

const InvalidAccessCode = memo<InvalidAccessCodeProps>(({ id, provider, onBuyClick }) => {
  const { t } = useTranslation('error');
  const isEnabledOAuth = useServerConfigStore(serverConfigSelectors.enabledOAuthSSO);
  const defaultTab = isEnabledOAuth ? Tab.Oauth : Tab.Password;
  const [mode, setMode] = useState<Tab>(defaultTab);

  return (
    <ErrorActionContainer>
      <Segmented
        block
        onChange={(value) => setMode(value as Tab)}
        options={
          [
            {
              icon: <Icon icon={AsteriskSquare} />,
              label: t('unlock.tabs.password'),
              value: Tab.Password,
            },
            { icon: <Icon icon={KeySquare} />, label: t('unlock.tabs.apiKey'), value: Tab.Api },
            isEnabledOAuth
              ? {
                  icon: <Icon icon={ScanFace} />,
                  label: t('oauth', { ns: 'common' }),
                  value: Tab.Oauth,
                }
              : undefined,
          ].filter(Boolean) as SegmentedLabeledOption[]
        }
        style={{ width: '100%' }}
        value={mode}
      />
      <Flexbox gap={24}>
        {mode === Tab.Password && <AccessCodeForm onClick={onBuyClick} />}
        {mode === Tab.Api && <APIKeyForm id={id} provider={provider} />}
        {isEnabledOAuth && mode === Tab.Oauth && <OAuthForm id={id} />}
      </Flexbox>
    </ErrorActionContainer>
  );
});

export default InvalidAccessCode;
