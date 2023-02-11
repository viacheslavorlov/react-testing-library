import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import {storeCreator} from "./store/storeCreator";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeCreator()}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

