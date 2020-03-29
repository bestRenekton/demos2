import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Hello from './pages/Hello'
import About from './pages/About'



const contextApp = React.createContext();

function App(props) {
  // console.log(props);
  let { masterStore } = props;

  let [master, setMaster] = masterStore ?
    [
      masterStore.getState(),
      masterStore.dispatch
    ] :
    [{}, () => { }];
  return (
    <contextApp.Provider value={{ master, setMaster }}>
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
              <Route exact path="/" render={(props) => <Hello {...props} />} />
              {/* <Route exact path="/" >
                <Hello />
              </Route> */}
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </contextApp.Provider>
  );
}

App.context = contextApp
export default App;
