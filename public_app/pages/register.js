import React    from "react"

import Register from "../components/register/component"

export default class extends React.Component {

    constructor(props) {
        super(props);
        // Little hack to force mini layout on register page
        // Not proud of it..
        document.getElementById("app").classList.add("mini");
    }

    componentWillUnmount() {
        // Little hack to force mini layout on register page
        document.getElementById("app").classList.remove("mini");
    }

    render() {
        return (
            <Register />
        );
    }
}
