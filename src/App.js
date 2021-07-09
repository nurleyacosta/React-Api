import React from 'react';
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Dashboard from './components/Dashboard';
import Inicial from './components/Inicial';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact render={ props =>(<Inicial {...props}/>)}></Route>
          <Route path='/Dashboard' exact render={ props =>(<Dashboard {...props}/>)}></Route>
          
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
