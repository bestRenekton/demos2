const { createAction } = require('../actions')
const { pageName, pageType } = require('../prompts')
const { pageBasePath, templateBasePath } = require('../config')

const genPage = () => ({
  description: '新增页面',
  prompts: [pageName, pageType],
  actions: [
    createAction({//添加tsx
      type: 'add',
      path: `${pageBasePath}/{{pageName}}/{{pageName}}.tsx`,
      templateFile: `${templateBasePath}/page.{{pageType}}.tsx.hbs`,
    }),
    createAction({//添加scss
      type: 'add',
      path: `${pageBasePath}/{{pageName}}/{{pageName}}.module.less`,
      templateFile: `${templateBasePath}/page.less.hbs`,
    }),
  ],
})

module.exports = genPage
