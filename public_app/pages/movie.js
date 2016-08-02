import React from "react"

import MoviePoster      from "../components/movie_poster/component"
import MovieDescription from "../components/movie_description/component"
import Comments         from "../components/comments/component"


import style            from "./movie.scss"

export default class extends React.Component {
    constructor(props) {
        super(props);
        document.title = `Super cinema - ${props.params.id}`; 
    }

    render() {
        return (
            <div className="pure-g movie-page">
                <div className="pure-u-1">
                    <div className="pure-g movie-page-wrapper">

                        <MoviePoster 
                            className   = "pure-u-1-3"
                            id          = {this.props.params.id} />

                        <MovieDescription 
                            className   = "pure-u-2-3"
                            id          = {this.props.params.id} />

                    </div>
                </div>

                <Comments
                    className   = "pure-u-1"
                    id          = {this.props.params.id} />

            </div>
        );
    }
}
