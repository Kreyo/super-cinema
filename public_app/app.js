/* Public react app entry point */

import React        from "react"
import React_dom    from "react-dom"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import store        from "./redux"
import { Provider } from "react-redux"

import HomePage     from "./pages/home"
import MoviePage    from "./pages/movie"
import RegisterPage from "./pages/register"
import LoginPage    from "./pages/login"

import Wrapper      from "./wrapper"

import globalStyle  from "./scss/global.scss"

React_dom.render((

    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history = { browserHistory }>
            <Route path="/"             component = { HomePage } />
            <Route path="/"             component = { Wrapper }>
                <Route path="/movie/:id"    component = { MoviePage } />
            </Route>
            <Route path="/register"     component = { RegisterPage } />
            <Route path="/login"        component = { LoginPage } />
        </Router>
    </Provider>

    ), document.getElementById('app')
);
