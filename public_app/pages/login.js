import React from "react"

import Login from "../components/login/component"

export default class extends React.Component {

    constructor(props) {
        super(props);
        // Little hack to force mini layout on login page
        // Not proud of it..
        document.getElementById("app").classList.add("mini");
    }

    componentWillUnmount() {
        // Little hack to force mini layout on login page
        document.getElementById("app").classList.remove("mini");
    }

    render() {
        return (
            <Login />
        );
    }
}
