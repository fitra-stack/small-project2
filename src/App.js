import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Index } from './pages/index';
import {Product}  from './pages/product';
import { Shop } from './pages/shop';
// import { Provider } from 'react-redux';
// import store from './states/store'

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <Switch>
        <Route component={Index} path='/' exact />
        <Route component={Product} path='/product' />
        <Route component={Shop} path='/shop' />
      </Switch>
    </Router>
    // </Provider>
  );
}

export default App;
