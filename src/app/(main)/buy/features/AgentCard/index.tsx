import { Avatar, Tag } from '@lobehub/ui';
import { Typography } from 'antd';
import { createStyles } from 'antd-style';
import { startCase } from 'lodash-es';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { BuyItem } from '@/types/buy';

const { Paragraph, Title } = Typography;

const useStyles = createStyles(({ css, token, isDarkMode }) => ({
  banner: css`
    opacity: ${isDarkMode ? 0.9 : 0.4};
  `,
  container: css`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    height: 100%;

    background: ${token.colorBgContainer};
    border-radius: ${token.borderRadiusLG}px;
    box-shadow: 0 0 1px 1px ${isDarkMode ? token.colorFillQuaternary : token.colorFillSecondary}
      inset;

    transition: box-shadow 0.2s ${token.motionEaseInOut};

    &:hover {
      box-shadow: 0 0 1px 1px ${isDarkMode ? token.colorFillSecondary : token.colorFill} inset;
    }
  `,
  desc: css`
    min-height: 44px;
    margin-bottom: 0 !important;
    color: #666;
  `,
  inner: css`
    padding: 16px;
  `,
  prize: css`
    min-height: 44px;
    margin-bottom: 0 !important;

    font-size: 25px;
    font-weight: 1000;
    color: rgb(255, 206, 0);
  `,
  time: css`
    color: ${token.colorTextDescription};
  `,
  title: css`
    margin-bottom: 0 !important;
    font-size: 18px !important;
    font-weight: bold;
  `,
}));

const AgentCard = memo<BuyItem>(({ id, name, prize, description, tagList }) => {
  const onAgentCardClick = (cid: number) => {
    console.log('click: ' + cid);
  };

  const { styles } = useStyles();

  return (
    <Flexbox className={styles.container} gap={24} key={id} onClick={() => onAgentCardClick(id)}>
      <Flexbox className={styles.inner} gap={12}>
        <Flexbox align={'flex-end'} gap={16} horizontal justify={'space-between'} width={'100%'}>
          <Title className={styles.title} ellipsis={{ rows: 1, tooltip: name }} level={3}>
            {name}
          </Title>
          <Avatar
            alt={name}
            avatar="/images/logo.png"
            size={40}
            style={{ alignSelf: 'flex-end' }}
            title={name}
          />
        </Flexbox>
        <Paragraph className={styles.desc} ellipsis={{ rows: 2 }}>
          {description}
        </Paragraph>
        <Paragraph className={styles.prize} ellipsis={{ rows: 1 }}>
          {prize}
        </Paragraph>
        <Flexbox gap={6} horizontal style={{ flexWrap: 'wrap' }}>
          {tagList.map((tag: string, index) => (
            <Tag key={index} style={{ margin: 0 }}>
              {startCase(tag).trim()}
            </Tag>
          ))}
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
});

export default AgentCard;
