import { ActionIcon } from '@lobehub/ui';
import { LassoSelect } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import ModelSwitchPanel from '@/features/ModelSwitchPanel';

const ModelSwitch = memo(() => {
  const { t } = useTranslation('chat');

  return (
    <ModelSwitchPanel>
      <ActionIcon icon={LassoSelect} placement={'bottom'} title={t('ModelSwitch.title')} />
    </ModelSwitchPanel>
  );
});

ModelSwitch.displayName = 'ModelSwitch';

export default ModelSwitch;
