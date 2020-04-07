import Taro, { Component, Config } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import "taro-ui/dist/style/index.scss"; // 全局引入一次即可

import Index from "./pages/index";

import configStore from "./store";

import "./app.less";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  componentDidMount() {
    if (!Taro.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      Taro.cloud.init({
        env: "test-d7cy9", // 前往云控制台获取环境id
        traceUser: true,
      });
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: ["pages/index/index", "pages/my/my"],
    tabBar: {
      color: "#7b7b7a",
      selectedColor: "#1296db",
      backgroundColor: "#eee",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "static/img/icon/home.png",
          selectedIconPath: "static/img/icon/home_a.png",
        },
        {
          pagePath: "pages/my/my",
          text: "我的",
          iconPath: "static/img/icon/me.png",
          selectedIconPath: "static/img/icon/me_a.png",
        },
      ],
    },
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black",
    },
  };
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
