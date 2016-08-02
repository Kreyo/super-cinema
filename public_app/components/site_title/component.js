import React from "react"
import { Link } from "react-router"

import style from "./style.scss"

import titleImg from "./site_title.png"

export default class extends React.Component {

    constructor(props) {
        super(props);

        this.slogans = [
            "HD 3d movies in full 2D!",
            "People over 70 love our new movies from their youth",
            "HD in full 480p",
            "HD quality 100% unguaranteed"
        ];
    }

    getSlogan() {
        return this.slogans[(Date.now() / 10000 | 0) % 4];
    }

    render() {
        return (
            <div className={"site-title " + this.props.className}>
                <Link to="/">
                    <img src={"/" + titleImg} />
                    <h1>Super cinema</h1>
                </Link>
                <span>{this.getSlogan()}</span>
            </div>
        );
    }
}
