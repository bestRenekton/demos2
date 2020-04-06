// 命令行提示
const createPrompts = ({ type, name, message, ...options}) => ({
  type,
  name,
  message,
  ...options,
})

module.exports = {
  // UI组件
  componentName: createPrompts({
    type: 'input',
    name: 'componentName',
    message: '请输入组件名称（首字母大写）',
  }),
  componentType: createPrompts({
    type: 'list',
    name: 'componentType',
    message: '选择组件类型',
    choices: ['function', 'class'],
    default: 0,
  }),
  // page
  pageName: createPrompts({
    type: 'input',
    name: 'pageName',
    message: '请输入页面名称（小写+下划线）',
  }),
  pageType: createPrompts({
    type: 'list',
    name: 'pageType',
    message: '选择页面类型',
    choices: ['function', 'class'],
    default: 0,
  }),
  // redux module
  moduleName: createPrompts({
    type: 'input',
    name: 'moduleName',
    message: '请输入model名称',
  })
}