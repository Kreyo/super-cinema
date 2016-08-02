import React from "react"

import style from "./style.scss"

export default class extends React.Component {
    render() {
        return (
            <ul className="comment-list">
                <li>
                    <h4>Author</h4>
                    <p>Comment is very long derp herp</p>
                </li>              
                <li>
                    <h4>Author</h4>
                    <p>Comment is very long derp herp</p>
                </li>              
            </ul>
        );
    }
}
