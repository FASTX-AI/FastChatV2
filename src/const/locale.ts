import { normalizeLocale, supportLocales } from '@/locales/resources';

export const DEFAULT_LANG = 'en-US';
export const FAST_GPT_LOCALE_COOKIE = 'FAST_GPT_LOCALE_COOKIE';

/**
 * Check if the language is supported
 * @param locale
 */
export const isLocaleNotSupport = (locale: string) => {
  return normalizeLocale(locale) === DEFAULT_LANG || !supportLocales.includes(locale);
};
