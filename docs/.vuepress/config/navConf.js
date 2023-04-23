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
  {
    text: '中间件',
    items: [
      {
        text: '服务器', items: [
          { text: 'Nginx', link: '/Middleware/Nginx/' },
        ]
      },
      {
        text: '消息队列', items: [
          { text: 'RabbitMQ', link: '/RabbitMQ/' },
          { text: 'RocketMQ', link: '/RocketMQ/' },
        ]
      },
      {
        text: '搜索引擎', items: [
          { text: 'ElasticSearch', link: '/ElasticSearch/' },
          { text: 'Solr', link: '/slor/' },
        ]
      }
    ]
  },
  {
    text: 'OCR',
    items: [
      {
        text: '训练', items: [
          { text: '模型训练', link: '/OCR/train/' },
        ]
      },
      {
        text: '部署', items: [
          { text: 'HubServing方式部署', link: '/OCR/deploy/hubserving/' },
          { text: 'PaddleServing方式部署', link: '/OCR/deploy/paddleserving/' },
        ]
      },
      {
        text: '环境安装', items: [
          { text: '安装Cuda和Cudnn', link: '/ElasticSearch/' },
          { text: 'Solr', link: '/slor/' },
        ]
      }
    ]
  },
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
