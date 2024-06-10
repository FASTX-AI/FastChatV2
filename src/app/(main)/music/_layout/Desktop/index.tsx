'use client';

import { PlaySquareOutlined } from '@ant-design/icons';
import {
  DraggablePanel,
  DraggablePanelBody,
  DraggablePanelContainer,
  DraggablePanelFooter,
  GradientButton,
} from '@lobehub/ui';
import { Card, Input, List, Segmented, Select, Space } from 'antd';
import type { SelectProps } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { LayoutProps } from '../type';

const { TextArea } = Input;

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation('common');
  const [value, setValue] = useState('');

  const options: SelectProps['options'] = [];

  const ops = [
    'acoustic | 原声的',
    'aggressive | 侵略性的',
    'anthemic | 赞歌般的',
    'atmospheric | 氛围的',
    'bouncy | 有弹性的',
    'chill | 放松的',
    'dark | 黑暗的',
    'dreamy | 梦幻的',
    'electronic | 电子的',
    'emotional | 情感的',
    'epic | 史诗般的',
    'experimental | 实验性的',
    'futuristic | 未来的',
    'groovy | 令人愉快的',
    'heartfelt | 由衷的',
    'infectious | 传染性的',
    'melodic | 有旋律的',
    'mellow | 柔和的',
    'powerful | 强力的',
    'psychedelic | 迷幻的',
    'romantic | 浪漫的',
    'smooth | 顺滑的',
    'syncopated | 切分的',
    'uplifting | 振奋人心的',
    'afrobeat | 非洲节奏',
    'anime | 动漫',
    'ballad | 民谣',
    'bedroom pop | 卧室流行',
    'bluegrass | 蓝草',
    'blues | 布鲁斯',
    'classical | 古典',
    'country | 乡村',
    'cumbia | 库姆比亚',
    'dance | 舞曲',
    'dancepop | 舞曲流行',
    'delta blues | 三角洲布鲁斯',
    'electropop | 电子流行',
    'disco | 迪斯科',
    'dream pop | 梦幻流行',
    'drum and bass | 鼓与贝斯',
    'edm | 电子舞曲',
    'emo | 情绪摇滚',
    'folk | 民谣',
    'funk | 放克',
    'future bass | 未来贝斯',
    'gospel | 福音',
    'grunge | 垃圾摇滚',
    'grime | 英国地下',
    'hip hop | 嘻哈',
    'house | 浩室',
    'indie | 独立',
    'j-pop | 日本流行',
    'jazz | 爵士',
    'k-pop | 韩国流行',
    'kids music | 儿童音乐',
    'metal | 金属',
    'new jack swing | 新杰克摇摆',
    'new wave | 新潮',
    'opera | 歌剧',
    'pop | 流行',
    'punk | 朋克',
    'raga | 雷鬼',
    'rap | 说唱',
    'reggae | 雷鬼',
    'reggaeton | 雷鬼顿',
    'rock | 摇滚',
    'rumba | 伦巴',
    'salsa | 萨尔萨',
    'samba | 桑巴',
    'sertanejo | 巴西乡村',
    'soul | 灵魂',
    'synthpop | 合成流行',
    'swing | 摇摆',
    'synthwave | 合成波',
    'techno | 科技舞曲',
    'trap | 陷阱',
    'uk garage | 英国车库',
    'ambient | 环境音乐',
    'cyberpunk | 赛博朋克',
    'glitch | 故障音乐',
    'drum’n’bass | 鼓与贝斯',
    'folk rock | 民谣摇滚',
    'indie folk | 独立民谣',
    'latin jazz | 拉丁爵士',
    'neo soul | 新灵魂乐',
    'soft rock | 软摇滚',
    'ska | 斯卡',
    'tribal | 部落音乐',
    'world music | 世界音乐',
    'electroacoustic | 电声音乐',
    'industrial | 工业音乐',
    'noise music | 噪音音乐',
    'psychedelic music | 迷幻音乐',
    'americana | 美国传统音乐',
    'bossa nova | 波萨诺瓦',
    'dub | 达布',
    'uk drill | 英国钻孔',
  ];

  const data = [];

  for (const [i, op] of ops.entries()) {
    options.push({
      label: op,
      value: op.split(' | ')[0],
    });
  }

  // simple mode (no lrc)
  // https://apikey.fastgpt.chat/generate/description-mode
  // gpt_description_prompt: "ddddsadad"
  // make_instrumental: false
  // mv: "chirp-v3-5"
  // prompt: "sadas"

  // https://apikey.fastgpt.chat/generate

  // continue_at: 120 继续创作的时间
  // continue_clip_id: "" 继续创作
  // mv: "chirp-v3-5" 版本
  // prompt: "2dsadsa" 歌词
  // tags: "1" 曲风
  // title: "sadas" 标题

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);

    const body = JSON.stringify({
      gpt_description_prompt: 'ddddsadad',
      make_instrumental: false,
      mv: 'suno-v3',
      prompt: 'sadas',
    });
    fetch('https://apikey.fastgpt.chat/generate/description-mode', { body })
      .then((res) => {
        console.log(res);
        console.log(res.json);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log('finish');
      });
  };

  return (
    <>
      <Flexbox
        height={'100%'}
        horizontal
        style={{ minHeight: 500, position: 'relative', backgroundColor: '#fff' }}
        width={'100%'}
      >
        <DraggablePanel
          expand={true}
          expandable={false}
          maxWidth={280}
          minWidth={280}
          mode={'fixed'}
          pin={false}
          placement="left"
          resize={false}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <DraggablePanelContainer style={{ flex: 1 }}>
            <Flexbox
              align="center"
              justify="center"
              style={{ borderBottom: '1px solid #e3e3e3', padding: '15px 0px' }}
            >
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  lineHeight: 1,
                  margin: 0,
                  color: '#333333',
                }}
              >
                {t('tab.music')}
              </p>
            </Flexbox>
            <DraggablePanelBody style={{ height: '100%' }}>
              {/* 主题内容制作 */}
              <Flexbox style={{ height: '100%' }}>
                <Segmented
                  block
                  defaultValue={'custom'}
                  options={[{ label: '定制模式', value: 'custom' }]}
                />
                <Input placeholder="请输入歌曲名称" type="ghost" style={{ marginTop: 10 }} />
                {/* 风格选择标签 */}
                <Space style={{ width: '100%', marginTop: 10 }} direction="vertical">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="请选择音乐风格"
                    defaultValue={[]}
                    onChange={handleChange}
                    options={options}
                  />
                </Space>
                <TextArea
                  placeholder="歌曲描述"
                  style={{ minHeight: '10vh', marginTop: 10 }}
                  showCount
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  maxLength={200}
                />
                <Flexbox flex={1} style={{ marginTop: 20 }}>
                  <TextArea
                    placeholder="自定义歌词：留空会自动生成，输入自定义歌词将会忽略 `歌曲描述` "
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={{ height: '100%', minHeight: '20vh' }}
                    showCount
                    maxLength={3000}
                    autoSize={{ minRows: 10, maxRows: 10 }}
                  />
                </Flexbox>
                <Flexbox horizontal style={{ marginTop: 20 }} align={'center'} justify={'center'}>
                  <GradientButton glow={false} size={'middle'} style={{ width: '100%' }}>
                    生成纯音乐
                  </GradientButton>
                  <GradientButton
                    glow={false}
                    size={'middle'}
                    style={{ width: '100%', marginLeft: 5 }}
                  >
                    立即创作
                  </GradientButton>
                </Flexbox>
              </Flexbox>
            </DraggablePanelBody>
            <DraggablePanelFooter
              style={{
                alignItems: 'center',
                color: '#aaaaaa',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              FastGPT | Suno API: v3.5
            </DraggablePanelFooter>
          </DraggablePanelContainer>
        </DraggablePanel>
        <Flexbox flex={1} style={{ height: '100vh', overflowX: 'auto' }}>
          {data.length === 0 ? (
            <Flexbox align="center" justify="center" style={{ width: '100%', height: '100%' }}>
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: 1,
                  margin: 0,
                  color: '#333333',
                }}
              >
                仅针对终身会员开放此功能，请联系客服咨询！
              </h2>
            </Flexbox>
          ) : (
            <List
              style={{ overflowY: 'auto', padding: '15px' }}
              grid={{ gutter: 15, xs: 2, sm: 3, md: 4, lg: 5, xxl: 6 }}
              dataSource={[]}
              renderItem={(item) => (
                <List.Item style={{ height: '180px', width: '188px' }}>
                  <Card
                    hoverable
                    style={{
                      padding: '0',
                      height: '180px',
                      backgroundImage:
                        "url('https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png')",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      width: '188px',
                    }}
                    styles={{
                      body: {
                        padding: '1px 1px 0 1px',
                        height: '100%',
                      },
                    }}
                  >
                    <Flexbox style={{ height: '100%' }}>
                      <Flexbox flex={1} align="center" justify="center">
                        <Flexbox
                          align="center"
                          justify="center"
                          style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 2 }}
                        >
                          <PlaySquareOutlined style={{ fontSize: 50, color: '#fff' }} />
                        </Flexbox>
                      </Flexbox>
                      <Flexbox
                        align="center"
                        justify="center"
                        style={{
                          height: '30px',
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          borderBottomLeftRadius: 5,
                          borderBottomRightRadius: 5,
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            color: '#fff',
                            fontWeight: 300,
                            lineHeight: 1,
                            margin: 0,
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            padding: '0 5px',
                            overflow: 'hidden',
                            width: '186px',
                          }}
                        ></p>
                      </Flexbox>
                    </Flexbox>
                  </Card>
                </List.Item>
              )}
            />
          )}
        </Flexbox>
      </Flexbox>
    </>
  );
};

Layout.displayName = 'DesktopMarketLayout';

export default Layout;
