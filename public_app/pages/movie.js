import React from "react"

import MoviePoster      from "../components/movie_poster/component"
import MovieDescription from "../components/movie_description/component"
import Comments         from "../components/comments/component"
import axios            from "axios"

import { connect }      from "react-redux"
import { addMoviesToList } from "../redux_actions"


import style            from "./movie.scss"

class Movie extends React.Component {
    constructor(props) {
        super(props);
        document.title = `Super cinema - ${props.params.id}`; 

        if(!props.movies[props.params.id]) {
            axios.get("/api/movies")
                .then((res) => {
                    this.props.setMovies(res.data);
                });
        }
    }

    render() {
        let movie = this.props.movies[this.props.params.id];
        return (
            <div className="pure-g movie-page">
                { !movie ? 
                    <p className="pure-u-1 loading">Loading movie information</p>
                :
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
                }

                <Comments
                    className   = "pure-u-1"
                    id          = {this.props.params.id} />

            </div>
        );
    }
}
export default connect(
    (state) => {
        return {
            movies: state.movies
        };
    },
    (dispatch) => {
        return {
            setMovies: (movies) => {
                dispatch(addMoviesToList(movies));
            }
        };
    }
)(Movie);
