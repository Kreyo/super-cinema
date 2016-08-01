import React from "react"

import MovieTrailer from "../movie_trailer/component"

import style from "./style.scss"

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerVisible: false
        };
    }

    togglePlayer() {
        this.setState({playerVisible: !this.state.playerVisible});
    }

    render() {
        return (
            <div className={"movie-poster " + this.props.className}>
                <img src="http://lorempixel.com/300/400" />
                <i className="material-icons" onClick={this.togglePlayer.bind(this)}>play_circle_filled</i>

                {this.state.playerVisible ? <MovieTrailer closeAction={this.togglePlayer.bind(this)} /> : ""}
            </div>
        );
    }
}
