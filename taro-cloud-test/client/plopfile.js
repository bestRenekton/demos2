// 自动生成component组件到对应目录
const genComponent = require('./plop/generators/component');
// 自动生成page组件到对应目录
const genPage = require('./plop/generators/page');
// 自动生成redux到对应目录
const genModule = require('./plop/generators/module');
// 可继续扩展
module.exports = function(plop) {
  // page generator
  plop.setGenerator('page', genPage());
  // component generator
  plop.setGenerator('component', genComponent());
  // redux module generator
  plop.setGenerator('module', genModule());
};
