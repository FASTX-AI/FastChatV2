import urlJoin from 'url-join';

import { getAppConfig } from '@/config/app';
import { OFFICIAL_SITE, OFFICIAL_URL, X } from '@/const/url';

import pkg from '../../package.json';

const { SITE_URL = OFFICIAL_URL } = getAppConfig();
const LAST_MODIFIED = new Date().toISOString();
export const AUTHOR_LIST = {
  arvinxx: {
    avatar: '',
    desc: '',
    name: '',
    url: '/',
  },
  canisminor: {
    avatar: '',
    desc: '',
    name: '',
    url: '/',
  },
  lobehub: {
    avatar: '',
    desc: '',
    name: 'FastGPT',
    url: '/',
  },
};

class Ld {
  generate({
    image = '/og/cover.png',
    url,
    title,
    description,
    date,
    webpage = {
      enable: true,
    },
  }: {
    date?: string;
    description: string;
    image?: string;
    title: string;
    url: string;
    webpage?: {
      enable?: boolean;
      search?: boolean;
    };
  }) {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        this.genWebSite(),
        webpage?.enable &&
          this.genWebPage({
            ...webpage,
            date,
            description,
            image,
            title,
            url,
          }),
        image && this.genImageObject({ image, url }),
        this.genOrganization(),
      ].filter(Boolean),
    };
  }

  genOrganization() {
    return {
      '@id': this.getId(SITE_URL, '#organization'),
      '@type': 'Organization',
      'alternateName': 'FastGPT',
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'customer support',
        'email': 'support@fastgpt.chat',
      },
      'description':
        'We are a group of e/acc design-engineers, hoping to provide modern design components and tools for AIGC, and creating a technology-driven forum, fostering knowledge interaction and the exchange of ideas that may culminate in mutual inspiration and collaborative innovation.',
      'email': 'support@fastgpt.chat',
      'founders': '',
      'image': '/chatgpt.png',
      'logo': {
        '@type': 'ImageObject',
        'height': 512,
        'url': '/chatgpt.png',
        'width': 512,
      },
      'name': 'FastGPT',
      'sameAs': [X, 'https://fastgpt.chat', 'https://fastgpt.chat', 'https://fastgpt.chat'],
      'url': OFFICIAL_SITE,
    };
  }

  getAuthors(ids: string[] = []) {
    const defaultAuthor = {
      '@id': this.getId(SITE_URL, '#organization'),
      '@type': 'Organization',
    };
    if (!ids || ids.length === 0) return defaultAuthor;
    if (ids.length === 1 && ids[0] === 'lobehub') return defaultAuthor;
    const personId = ids.find((id) => id !== 'lobehub');
    if (!personId) return defaultAuthor;
    const person = (AUTHOR_LIST as any)?.[personId];
    if (!person) return defaultAuthor;
    return {
      '@type': 'Person',
      'name': person.name,
      'url': person.url,
    };
  }

  genWebPage({
    date,
    image,
    search,
    description,
    title,
    url,
  }: {
    breadcrumbs?: { title: string; url: string }[];
    date?: string;
    description: string;
    image?: string;
    search?: boolean;
    title: string;
    url: string;
  }) {
    const fixedUrl = this.fixUrl(url);
    const dateCreated = date ? new Date(date).toISOString() : LAST_MODIFIED;
    const dateModified = date ? new Date(date).toISOString() : LAST_MODIFIED;

    const baseInfo: any = {
      '@id': fixedUrl,
      '@type': 'WebPage',
      'about': {
        '@id': this.getId(SITE_URL, '#organization'),
      },
      'breadcrumbs': {
        '@id': this.getId(fixedUrl, '#breadcrumb'),
      },
      'dateModified': dateModified,
      'datePublished': dateCreated,
      'description': description,
      'image': {
        '@id': this.getId(fixedUrl, '#primaryimage'),
      },
      'inLanguage': 'zh-CN',
      'isPartOf': {
        '@id': this.getId(SITE_URL, '#website'),
      },
      'name': this.fixTitle(title),
      'primaryImageOfPage': {
        '@id': this.getId(fixedUrl, '#primaryimage'),
      },
      'thumbnailUrl': image,
    };

    if (search)
      baseInfo.potentialAction = {
        '@type': 'SearchAction',
        'query-input': 'required name=search_term_string',
        'target': `${fixedUrl}?q={search_term_string}`,
      };

    return baseInfo;
  }

  genImageObject({ image, url }: { image: string; url: string }) {
    const fixedUrl = this.fixUrl(url);

    return {
      '@id': this.getId(fixedUrl, '#primaryimage'),
      '@type': 'ImageObject',
      'contentUrl': image,
      'inLanguage': 'zh-CN',
      'url': image,
    };
  }

  genWebSite() {
    const baseInfo: any = {
      '@id': this.getId(SITE_URL, '#website'),
      '@type': 'WebSite',
      'description': pkg.description,
      'inLanguage': 'zh-CN',
      'name': 'FastGPT',
      'publisher': {
        '@id': this.getId(SITE_URL, '#organization'),
      },
      'url': SITE_URL,
    };

    return baseInfo;
  }

  private getId(url: string, id: string) {
    return [url, id].join('/');
  }

  private fixTitle(title: string) {
    return title.includes('FastGPT') ? title : `${title} · FastGPT`;
  }

  private fixUrl(url: string) {
    return urlJoin(SITE_URL, url);
  }
}

export const ldModule = new Ld();
