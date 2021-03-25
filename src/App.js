import React from "react";
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Pages
import Home from './pages/home';
import Devices from './pages/devices';
import Products from './pages/products';
import Auth from './pages/auth'; 

function App() {
  return (
    <Router className="app">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/devices' exact component={Devices} />
        <Route path='/products' exact component={Products} />
        <Route path='/auth' exact component={Auth} />
      </Switch>
    </Router>
  );
}

export default App;
