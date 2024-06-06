import { Metadata } from 'next';

import { appEnv, getAppConfig } from '@/config/app';
import { OFFICIAL_URL } from '@/const/url';
import { translation } from '@/server/translation';

const title = 'FastGPT';

const { SITE_URL = OFFICIAL_URL } = getAppConfig();
const BASE_PATH = appEnv.NEXT_PUBLIC_BASE_PATH;

// if there is a base path, then we don't need the manifest
const noManifest = !!BASE_PATH;

export const generateMetadata = async (): Promise<Metadata> => {
  const { t } = await translation('metadata');
  return {
    appleWebApp: {
      statusBarStyle: 'black-translucent',
      title,
    },
    description: t('chat.description'),
    icons: {
      apple: '/chatgpt.png',
      icon: '/chatgpt.png',
      shortcut: '/chatgpt.png',
    },
    manifest: noManifest ? undefined : '/manifest.json',
    metadataBase: new URL(SITE_URL),
    openGraph: {
      description: t('chat.description'),
      images: [
        {
          alt: t('chat.title'),
          height: 640,
          url: '/chatgpt.png',
          width: 640,
        },
      ],
      locale: 'zh-CN',
      siteName: title,
      title: title,
      type: 'website',
      url: OFFICIAL_URL,
    },
    title: {
      default: t('chat.title'),
      template: '%s · FastGPT',
    },
    twitter: {
      card: 'summary_large_image',
      description: t('chat.description'),
      images: ['/chatgpt.png'],
      site: '@lobehub',
      title: t('chat.title'),
    },
  };
};
