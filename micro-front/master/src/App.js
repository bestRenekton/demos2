import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const todos = useSelector((state) => { return state.todos; });
  const dispatch = useDispatch();

  const goSubapp = (subapp) => {
    window.history.pushState(null, subapp, subapp)
  }
  return (
    <div className="master">
      <header className="master-header">
        <h1>master</h1>
        <p>master自己的store:{todos.num} <button onClick={() => { dispatch({ type: 'ADD_TODO' }) }}>点击增加</button> </p>
      </header>
      <div className="master-main">
        <ul className="master-nav">
          <li onClick={() => { goSubapp('/app1-react-create') }}>app1-react-create</li>
          <li onClick={() => { goSubapp('/app2-vue-cli') }}>app2-vue-cli</li>
          {/* <li onClick={() => { goSubapp('/app3-react-umi') }}>app3-react-umi</li> */}
        </ul>
        {/* 子应用 */}
        <main id="subapp-container"></main>
      </div>
    </div>
  );
}

export default App;