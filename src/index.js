import React from 'react';
import { render } from 'react-dom';

// Import css
import 'tachyons';
import './styles/index.scss';


// Import Components
import App from './views/App';
import Home from './views/Home';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
