import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "redux/index.js";
import devToolsEnhancer from 'remote-redux-devtools';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

let store;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    store = createStore(rootReducer, devToolsEnhancer({ realtime: true, }));
} else {
    store = createStore(rootReducer);
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
