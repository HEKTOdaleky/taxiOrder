import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OrderPage from './containers/OrderPage';
import './App.scss';
import Cookies from "js-cookie";


function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={OrderPage}/>
        </Switch>
      </Router>
  );
}

export default App;
