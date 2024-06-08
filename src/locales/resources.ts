import resources from './default';

export const locales = ['zh-CN', 'en-US'] as const;

export type DefaultResources = typeof resources;
export type NS = keyof DefaultResources;
export type Locales = (typeof locales)[number];

export const normalizeLocale = (locale?: string): string => {
  if (!locale) return 'zh-CN';

  for (const l of locales) {
    if (l.startsWith(locale)) {
      return l;
    }
  }

  return 'zh-CN';
};

type LocaleOptions = {
  label: string;
  value: Locales;
}[];

export const localeOptions: LocaleOptions = [
  {
    label: '简体中文',
    value: 'zh-CN',
  },
  {
    label: 'English',
    value: 'en-US',
  },
] as LocaleOptions;

export const supportLocales: string[] = [...locales, 'zh', 'en'];
