module.exports = [
  { text: '首页', link: '/' },
  {
    text: '框架',
    items: [
      {
        text: 'Spring', items: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about/' },
        ]
      },
      {
        text: 'Mybatis', items: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about/' },
        ]
      }
    ]
  },
  { text: '系统', items: [
    { text: 'Linux', link: '/os/linux/' },
    { text: 'Ubuntu', link: '/os/ubuntu/' },
    { text: 'CentOS', link: '/os/centos/' },
  ]},
  { text: '后端', items: [
    { text: 'Nginx', link: '/backend/nginx/' },
    { text: 'MySQL', link: '/backend/mysql/' },
    { text: 'Redis', link: '/backend/redis/' },
    { text: 'Docker', link: '/backend/docker/' },
  ]},
  { text: '开发工具', items: [
    { text: 'Git', link: '/tools/git/' },
    { text: 'Github', link: '/tools/github/' },
    { text: 'VSCode', link: '/tools/vscode/' },
    { text: 'Bookmark scripts', link: '/tools/bookmark-scripts/' },
  ]},
  { text: '更多', items: [
    { text: '导航 🎉', link: '/more/navigation.html' },
    { text: 'VuePress 侧边栏插件', link: 'https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/' },
    { text: 'VuePress 官网', link: 'https://vuepress.vuejs.org/zh/' },
  ]},
];
