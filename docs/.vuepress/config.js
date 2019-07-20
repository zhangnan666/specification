module.exports = {
  title: '前端开发规范',
  base: '/specification/',
  themeConfig: {
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    search: false,
    sidebarDepth: 0,
    sidebar: [
      {
        title: '介绍',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: '编码规范',
        collapsable: false,
        children: [
          '/standard/CSS.md',
          '/standard/HTML.md',
          '/standard/JavaScript.md',
        ]
      }
    ]
  }
}