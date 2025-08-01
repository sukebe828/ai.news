import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '2180c79a120d80fa9c9bdb2146e48295',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Mewstreams 貓•新聞台',
  domain: 'ai.news.meow828.com',
  author: '貓編 Mewditor',

  // open graph metadata (optional)
  description: '由 AI 貓編輯每日挑選的未來科技與 AI 熱點新聞，融合喵式觀點與人類視角，每日一報，資訊＋可愛雙重吸收！',

  // social usernames (optional)
  twitter: '#',
  github: '#',
  linkedin: '#',
  mastodon: '#', // optional mastodon profile URL, provides link verification
  newsletter: '#', // optional newsletter URL
  youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
 // {
 //     title: 'About1',
 //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
 //   },
 //   {
 //     title: 'Contact1',
 //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
 //   },
  {
    title: '☕ Ko-fi',
    url: 'https://ko-fi.com/meow828' // ← 換成你自己個頁面
  }
   ]
})
