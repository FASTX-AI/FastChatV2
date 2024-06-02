import { Button } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

interface AccessCodeFormProps {
  onClick: () => void;
}

const AccessCodeForm = memo<AccessCodeFormProps>(({ onClick }) => {
  const { t } = useTranslation('error');

  return (
    <>
      <Flexbox gap={12}>
        <Button onClick={onClick} type={'primary'}>
          {t('unlock.password.buy')}
        </Button>
      </Flexbox>
    </>
  );
});

export default AccessCodeForm;
