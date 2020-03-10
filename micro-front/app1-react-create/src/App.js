import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Hello from './pages/Hello'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/app1-react-create' : '/'}>
      <div className="subapp">
        <header className="subapp-header">
          <h1>this is app1-react-create</h1>
        </header>
        <div className="subapp-main">
          <ul>
            <li><Link to="/">Hello</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <Switch >
            <Route exact path="/">
              <Hello />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
