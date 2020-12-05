module.exports = {
  base: '/Mo-UI/',
  title: 'Mo UI',
  description: '一个为了摸得透彻而生的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/toast',
          '/components/grid',
          '/components/layout',
        ]
      },

    ]
  }
}