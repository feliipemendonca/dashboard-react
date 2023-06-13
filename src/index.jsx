import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";

import reportWebVitals from './reportWebVitals';
import { store } from './reducers/Store';
import Login from './views/auth/Login';
import {routes} from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ScrollToTop = _ => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])
}

const getRoutes = _ => {
    const getRoutes = routes
    return getRoutes.map((prop, key) => {
        return (
            <Route path={prop.path} element={prop.component} key={key} exact />
        )
    })
}

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="*" element={<Login/>} />
                {getRoutes()}
            </Routes>
        </BrowserRouter>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
