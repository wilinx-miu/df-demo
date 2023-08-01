import { defineConfig } from 'dumi';

const repo = 'df-demo';

const { REACT_APP_ENV, NODE_ENV } = process.env
const isEnvDevelopment = NODE_ENV === 'development'
const productionScripts = isEnvDevelopment
  ? []
  : [
      {
        src: './libs/iconfont/iconfont.js',
        crossOrigin: 'true',
      },
    ]

export default defineConfig({
  title: repo,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/df-demo',
    },
  ],
  // more config: https://d.umijs.org/config
});
