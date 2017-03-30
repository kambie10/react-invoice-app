import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import Async from './middlewares/async';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Customers from './pages/customers';
import Products from './pages/products';
import Invoices from './pages/invoices';
import AddInvoice from './pages/add_invoice';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Invoices}/>
        <Route path="invoices" component={Invoices}></Route>
        <Route path="customers" component={Customers}></Route>
        <Route path="products" component={Products}></Route>
        <Route path="add-invoice" component={AddInvoice}></Route>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
