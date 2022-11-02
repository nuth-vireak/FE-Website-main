import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from './App';
import reducers from "./reducers";

import './index.css';

window.process = {
    env: {
        NODE_ENV: 'development'
    }
}
ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStore(reducers)}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

