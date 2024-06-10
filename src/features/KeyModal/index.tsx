'use client';

import { Modal, type ModalProps } from '@lobehub/ui';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PAY_SITE } from '@/const/url';
import InvalidAccessCode from '@/features/Conversation/Error/InvalidAccessCode';
import { useGlobalStore } from '@/store/global';

const SetKeyModal = memo<ModalProps>(() => {
  const { t } = useTranslation('common');

  const [isAPIKeySettingsModalOpen, toggleMidjourneySetting] = useGlobalStore((s) => [
    s.isAPIKeySettingsModalOpen,
    s.toggleMidjourneySetting,
  ]);

  return (
    <Modal
      allowFullscreen
      maskClosable={true}
      closable={true}
      open={isAPIKeySettingsModalOpen}
      onCancel={() => toggleMidjourneySetting(false)}
      title={t('task.setKey')}
      footer={null}
    >
      <InvalidAccessCode
        id=""
        onBuyClick={() => {
          window.open(PAY_SITE, '_blank');
        }}
        provider="openai"
      />
    </Modal>
  );
});

export default SetKeyModal;
