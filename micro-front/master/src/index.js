import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import render from './ReactRender';
import { createStore } from 'redux'
import reducers from './reducers/index'
import { Provider } from 'react-redux'


const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('master'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



function genActiveRule(routerPrefix) {
    return location => location.pathname.startsWith(routerPrefix);
}
/**
 * Step1 初始化应用（可选）
 */
render({ appContent: '', loading: true });

/**
 * Step2 注册子应用
 */
registerMicroApps(
    [
        {
            name: 'app1-react-create',
            entry: process.env.NODE_ENV === 'production' ?
                '//localhost:5000/app1-react-create'
                : '//localhost:3001/app1-react-create',
            render,
            activeRule: genActiveRule('/app1-react-create'),
            props: {
                masterStore: store
            }
        },
        {
            name: 'app2-vue-cli',
            entry: process.env.NODE_ENV === 'production' ?
                '//localhost:5000/app2-vue-cli'
                : '//localhost:3002/app2-vue-cli',
            render,
            activeRule: genActiveRule('/app2-vue-cli'),
            props: {
                masterStore: store
            }
        },
    ],
    {
        beforeLoad: [
            app => {
                console.log('before load %c%s', 'color: green;', app.name);
            },
        ],
        beforeMount: [
            app => {
                console.log('before mount %c%s', 'color: green;', app.name);
            },
        ],
        afterUnmount: [
            app => {
                console.log('after unmount %c%s', 'color: green;', app.name);
            },
        ],
    },
);

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/app1-react-create');

/**
 * Step4 启动应用
 */
start({
    prefetch: true, // 是否启用 prefetch 特性，默认为 true
    jsSandbox: true,// 是否启用 js 沙箱，默认为 true
    singular: true,// 是否为单实例场景，默认为 true
    fetch: window.fetch,// 自定义的 fetch 方法
});
/**
 * Step5 开启一些监控或者埋点脚本
 * 第一个子应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。
 */
runAfterFirstMounted(() => {
    console.log('[master] first app mounted');
});