import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { hashHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk'

// logger temporarily removed
// import createLogger from 'redux-logger'
// const loggerMiddleware = createLogger()

// import the root reducer
import rootReducer from './reducers/index';

// create an object for the default data
const defaultState = {
  ui: {
    loaded: false
  }
};

// Dev tools
const enhancers = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Put reducers and state together
const store = createStore(
  rootReducer,
  defaultState,
  enhancers
);

// Sync store with browser history
export const history = syncHistoryWithStore(hashHistory, store);

// used in development
if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer)
  });
}

export default store;
