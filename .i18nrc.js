const { defineConfig } = require('@lobehub/i18n-cli');

module.exports = defineConfig({
  entry: 'locales/zh-CN',
  entryLocale: 'zh-CN',
  output: 'locales',
  outputLocales: ['en-US'],
  temperature: 0,
  modelName: 'gpt-3.5-turbo',
  splitToken: 2048,
  experimental: {
    jsonMode: true,
  },
});
