// @vitest-environment node
import { describe, expect, it, vi } from 'vitest';

import { PluginStore } from './Store';

const baseURL = 'https://chat-plugins.lobehub.com';

describe('PluginStore', () => {
  it('should return the default index URL when no language is provided', () => {
    const pluginStore = new PluginStore();
    const url = pluginStore.getPluginIndexUrl();
    expect(url).toBe(baseURL);
  });

  it('should return the index URL for a supported language', () => {
    const pluginStore = new PluginStore();
    const url = pluginStore.getPluginIndexUrl('en-US');
    expect(url).toBe(baseURL);
  });
});
