import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';




// ReactDOM.render(<App />, document.getElementById('root'));
function render() {
    ReactDOM.render(<App />, document.getElementById('root'));
}






if (window.__POWERED_BY_QIANKUN__) {
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
    render();
}

/**
 * bootstrap 只会在子应用初始化的时候调用一次，下次子应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
    console.log('bootstraped %c%s', 'color: green;', 'app1-react-create');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
    console.log('props from master %c%s', 'color: green;', 'app1-react-create', props);
    render();
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载子应用的应用实例
 */
export async function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();