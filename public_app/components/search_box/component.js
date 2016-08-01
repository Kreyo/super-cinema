import React from "react"

import style from "./style.scss"

export default class extends React.Component {
    render() {
        return (
            <div className={"search-box " + this.props.className}>
                <input type="text" placeholder="Search for movie" />
            </div>
        );
    }
}
