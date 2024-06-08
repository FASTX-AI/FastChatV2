'use client';

import { Form, type FormItemProps, type ItemGroup, Tooltip } from '@lobehub/ui';
import isEqual from 'fast-deep-equal';
import { isString } from 'lodash-es';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { FORM_STYLE } from '@/const/layoutTokens';

import { useStore } from '../store';
import { SessionLoadingState } from '../store/initialState';
import AutoGenerateInput from './AutoGenerateInput';
import AutoGenerateSelect from './AutoGenerateSelect';

const AgentMeta = memo(() => {
  const { t } = useTranslation('setting');

  const [hasSystemRole, updateMeta, autocompleteMeta] = useStore((s) => [
    !!s.config.systemRole,
    s.setAgentMeta,
    s.autocompleteMeta,
  ]);

  const loading = useStore((s) => s.autocompleteLoading);
  const meta = useStore((s) => s.meta, isEqual);

  const basic = [
    {
      Render: AutoGenerateInput,
      key: 'title',
      label: t('settingAgent.name.title'),
      onChange: (e: any) => updateMeta({ title: e.target.value }),
      placeholder: t('settingAgent.name.placeholder'),
    },
    {
      Render: AutoGenerateInput,
      key: 'description',
      label: t('settingAgent.description.title'),
      onChange: (e: any) => updateMeta({ description: e.target.value }),
      placeholder: t('settingAgent.description.placeholder'),
    },
    {
      Render: AutoGenerateSelect,
      key: 'tags',
      label: t('settingAgent.tag.title'),
      onChange: (e: any) => updateMeta({ tags: isString(e) ? e.split(',') : e }),
      placeholder: t('settingAgent.tag.placeholder'),
    },
  ];

  const autocompleteItems: FormItemProps[] = basic.map((item) => {
    const AutoGenerate = item.Render;
    return {
      children: (
        <AutoGenerate
          canAutoGenerate={hasSystemRole}
          loading={loading[item.key as keyof SessionLoadingState]}
          onChange={item.onChange}
          onGenerate={() => {
            autocompleteMeta(item.key as keyof typeof meta);
          }}
          placeholder={item.placeholder}
          value={meta[item.key as keyof typeof meta]}
        />
      ),
      label: item.label,
    };
  });

  const metaData: ItemGroup = {
    children: [...autocompleteItems],
    extra: (
      <Tooltip
        title={
          !hasSystemRole
            ? t('autoGenerateTooltipDisabled', { ns: 'common' })
            : t('autoGenerateTooltip', { ns: 'common' })
        }
      ></Tooltip>
    ),
    title: t('settingAgent.title'),
  };

  return <Form items={[metaData]} itemsType={'group'} variant={'pure'} {...FORM_STYLE} />;
});

export default AgentMeta;
