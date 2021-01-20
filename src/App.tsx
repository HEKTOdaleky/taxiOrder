import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OrderPage from './containers/OrderPage';
import './App.scss';
import Bga from './containers/Bga';


function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={OrderPage}/>
                <Route path='/bga' exact component={Bga}/>
            </Switch>
        </Router>
    );
}

export default App;
