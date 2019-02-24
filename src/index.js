import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { createEpicMiddleware } from "redux-observable";
import * as serviceWorker from './serviceWorker';
import whyskyReducer from "./reducers/root";
import photoReducer from "./reducers/photoReducer";
import { rootEpic } from './epics';
import { BrowserRouter as Router } from "react-router-dom";

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({whysky:whyskyReducer,photo:photoReducer});

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
