// const path = require('path');
// require('dotenv').config();
const moment = require('moment');
module.exports = {
  // 显示最近更新的插件
  '@vuepress/last-updated': {
    transformer: (timestamp) => {
      moment.locale("zh-cn")
      return moment(timestamp).format("LLL")
      // return moment(timestamp).fromNow()
    }
  },
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用",
      buttonText: "刷新"
    }
  },
  // 回到顶部插件
  '@vuepress/back-to-top': true,
  // 自动生成侧边栏插件
  "vuepress-plugin-auto-sidebar": {
    output: {
      filename: 'config/sidebarConf'
    },
    title: {
      mode: "capitalize",
      map: {
        "/more/": "更多🎉"
      }
    },
    git: {
      trackStatus: 'add'
    }
  },
  // 图像放大插件
  "@vuepress/plugin-medium-zoom": {
    selector: 'img'
  },
  // 搜索插件
  '@vuepress/plugin-search': {
    locales: {
      '/': {
        placeholder: '搜索',
      }
    },
    maxSuggestions: 10,
    // 排除首页
    isSearchable: (page) => page.path !== '/'
  },
  // 支持代码块复制插件
  'vuepress-plugin-code-copy': {
    successText: "复制成功！"
  }
}