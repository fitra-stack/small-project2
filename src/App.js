import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Index } from './pages/index';
import Product  from './pages/product';
import { Shop } from './pages/shop';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Index} path='/' exact />
        <Route component={Product} path='/product' />
        <Route component={Shop} path='/shop' />
      </Switch>
    </Router>
  );
}

export default App;
