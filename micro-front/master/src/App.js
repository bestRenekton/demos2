import React from 'react';
import './App.css';

function App() {
  const goSubapp = (subapp) => {
    window.history.pushState(null, subapp, subapp)
  }
  return (
    <div className="master">
      <header className="master-header">
        <h1>master</h1>
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