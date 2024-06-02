'use client';

import { Grid, SpotlightCardProps } from '@lobehub/ui';
import { Skeleton } from 'antd';
import { createStyles } from 'antd-style';
import { memo, useCallback } from 'react';
import LazyLoad from 'react-lazy-load';

import { useBuyStore } from '@/store/buy';

import AgentCard from './AgentCard';

const useStyles = createStyles(({ css, responsive }) => ({
  compactLazy: css`
    min-height: 120px;
  `,
  lazy: css`
    min-height: 332px;
  `,
  title: css`
    margin-top: 0.5em;
    font-size: 24px;
    font-weight: 600;
    ${responsive.mobile} {
      font-size: 20px;
    }
  `,
}));

export interface AgentListProps {
  mobile?: boolean;
}

const AgentList = memo<AgentListProps>(() => {
  const itemList = useBuyStore((state) => state.itemList);

  const { styles } = useStyles();

  const GridCompactRender: SpotlightCardProps['renderItem'] = useCallback(
    (props: any) => (
      <LazyLoad className={styles.compactLazy} offset={332}>
        <AgentCard variant={'compact'} {...props} />
      </LazyLoad>
    ),
    [],
  );

  if (itemList?.length === 0) {
    return <Skeleton paragraph={{ rows: 8 }} title={false} />;
  }

  return (
    <Grid rows={3}>
      {itemList.map((item) => (
        <GridCompactRender key={item.id} {...item} />
      ))}
    </Grid>
  );
});

AgentList.displayName = 'AgentList';

export default AgentList;
