'use client';

import { useSize } from 'ahooks';
import { Progress } from 'antd';
import { createStyles } from 'antd-style';
import { memo, useEffect, useRef, useState } from 'react';
import { Center } from 'react-layout-kit';

import { midjourneySelectors, useMidjourneyStore } from '@/store/midjourney';

import Guide from './Guide';
import ImagePreview from './ImagePreview';
import Loading from './Loading';

const useStyles = createStyles(({ css, token, cx, stylish, prefixCls }) => ({
  container: css`
    position: relative;
    overflow: hidden;
  `,
  process: cx(css`
    position: absolute;
    z-index: 100;

    .${prefixCls}-progress-text {
      font-family: ${token.fontFamilyCode};
      font-size: 12px;
      color: ${token.colorTextLightSolid} !important;
    }
  `),
  waiting: cx(
    stylish.blur,
    css`
      position: absolute;
      z-index: 10;

      padding: 8px;

      background: ${token.colorFillTertiary};
      border-radius: ${token.borderRadiusLG}px;
    `,
  ),
}));

const Preview = memo(() => {
  const { styles } = useStyles();
  const [loaded, setLoaded] = useState(false);

  const [isAppInited, showImage, showProgress, progress] = useMidjourneyStore((s) => [
    midjourneySelectors.isAppInited(s),
    midjourneySelectors.showImage(s),
    midjourneySelectors.showProgress(s),
    midjourneySelectors.currentTaskProgress(s),
  ]);

  const ref = useRef<HTMLDivElement>(null);
  const size = useSize(ref);

  useEffect(() => {
    if (!size) return;

    const maxSize = size.width > size.height ? size.height : size.width;
    document.documentElement.style.setProperty('--max', `${maxSize}px`);
  }, [size]);

  return (
    <Center className={styles.container} flex={1} gap={8} justify={'center'} ref={ref}>
      {isAppInited ? (
        <>
          {!showImage && (
            <Center height={'100%'} width={'100%'}>
              <Guide />
            </Center>
          )}
          {showProgress && progress !== 0 && progress !== 100 && (
            <div className={styles.process}>
              <Progress percent={progress} size={[200, 20]} strokeColor="#001342" />
            </div>
          )}
          {showImage && <ImagePreview setLoaded={setLoaded} />}
        </>
      ) : (
        <Loading />
      )}
    </Center>
  );
});

export default Preview;
