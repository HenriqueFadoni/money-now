import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { combineReducers } from 'redux';

import getData from './store/reducers/getData';
import findRate from './store/reducers/findRate';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers ({
    getData: getData,
    findRate: findRate
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(reduxThunk)
));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
