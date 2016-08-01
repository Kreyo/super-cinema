
import React        from "react"
import React_dom    from "react-dom"
import { Router, Route, browserHistory, IndexRoute } from "react-router"

import HomePage     from "./pages/home"
import MoviePage    from "./pages/movie"
import RegisterPage from "./pages/register"
import LoginPage    from "./pages/login"

import Wrapper      from "./wrapper"

import globalStyle  from "./scss/global.scss"

React_dom.render((

    <Router history = { browserHistory }>
        <Route path="/"             component = { HomePage } />
        <Route path="/"             component = { Wrapper }>
            <Route path="/movie/:id"    component = { MoviePage } />
            <Route path="/register"     component = { RegisterPage } />
            <Route path="/login"        component = { LoginPage } />
        </Route>
    </Router>

    ), document.getElementById('app')
);
