import React from "react"

import style from "./style.scss"

export default class extends React.Component {
    render() {
        return (
            <div className={"footer " + this.props.className}>
                <span>All rights reserved to chicken banana &copy; 2016</span>
                <span>This is an example site built to show the front-end reactJS skills</span>
                <span>Author - Kristaps Keselis</span>
            </div>
        );
    }
}
