import React from "react"

import style from "./style.scss"

export default class extends React.Component {
    render() {
        return (
            <div className={"movie-description " + this.props.className}>
                <h2 className="title">Movie title</h2>
                <p className="release-date">Released in 2003</p>
                <p className="genre">Action, horror</p>

                <h3>Description</h3>
                <p className="plot">
                    I am a movie description that is booring and short
                </p>

                <h3>Director</h3>
                <p>John Bumshmit</p>

                <h3>Cast</h3>
                <ul className="cast">
                    <li>Ben Chapleck</li>
                    <li>Captain crisp</li>
                    <li>Bannana banderosa</li>
                    <li>Steeven Sequel</li>
                    <li>John "the magic" Mickey</li>
                </ul>
            </div>
        );
    }
}
