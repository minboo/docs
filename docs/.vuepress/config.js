
const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const sidebarConf = require('./config/sidebarConf.js');
const headConf = require('./config/headConf.js');
module.exports = {
  title: "在路上",
  description: "description描述",
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    logo: '/logo.png',
    contributorsText: '贡献者',
    docsRepo: 'minboo/docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '编辑文档！',
    lastUpdated: '上次更新', // 最后更新时间
    sidebar: sidebarConf,
    nav: navConf,
    nextLinks: true, // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    prevLinks: true // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
  },
}
