import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "redux/index.js";
import logger from 'redux-logger'
// import devToolsEnhancer from 'remote-redux-devtools';
import thunkMiddleware from 'redux-thunk'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

let store;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // store = createStore(rootReducer, devToolsEnhancer({ realtime: true, }));
  // const devTools = devToolsEnhancer({ realtime: true, });
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(logger, thunkMiddleware)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
}

const Apps = () => (
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render((<Apps />), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
