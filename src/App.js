import './App.scss';
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Login } from './Components/Login/Login';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
