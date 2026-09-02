import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: '首页', href: getPermalink('/') },
    { text: '博客', href: getBlogPermalink() },
    { text: '分类', href: getPermalink('/blog/category') },
    { text: '关于', href: getPermalink('/about') },
  ],
  actions: [],
};

export const footerData = {
  links: [],
 secondaryLinks: [
  { text: '首页', href: getPermalink('/') },
  { text: '博客', href: getBlogPermalink() },
  { text: '分类', href: getPermalink('/blog/category') },
  { text: '关于', href: getPermalink('/about') },
],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // 按需添加社交链接，示例：
    // { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/你的用户名' },
  ],
  footNote: `© 2026 数智人心 · 保留所有权利`,
};
