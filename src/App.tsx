import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OrderPage from './containers/OrderPage';
import './App.scss';

function App() {
    // @ts-ignore
    console.log(window.google);
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={OrderPage}/>
        </Switch>
      </Router>
  );
}

export default App;
