import React from "react"
import { connect } from "react-redux"

import style from "./style.scss"

import MovieItem from "../movie_item/component"

class MovieCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 5
        };
    }

    // CHange current carousel position
    changePosition(amount) {
        let nextPos = this.state.position + amount
        // If going backwards, wrap at 0 to the end of the movies
        nextPos = nextPos >= 0 ? nextPos : Object.keys(this.props.movies).length;     
    
        this.setState({
            position: nextPos
        });
    }
    

    render() {

        let movies      = this.props.movies;
        let ids         = Object.keys(movies);
        let movieLeft   = movies[ids[this.state.position % (ids.length - 1)]];
        let movieCenter = movies[ids[(this.state.position + 1) % (ids.length - 1)]];
        let movieRight  = movies[ids[(this.state.position + 2) % (ids.length - 1)]];

        return (
           <div className={"movie-carousel " + this.props.className}>
                { ids.length !== 0 ? 
                    <div className="pure-g">
                        
                        <MovieItem
                            className   = "pure-u-1-3"
                            poster      = {movieLeft.Poster}
                            title       = {movieLeft.Title}
                            year        = {movieLeft.Year}
                            id          = {movieLeft.imdbID} >
                            
                            <button type="button"
                                    className="backward"
                                    onClick={this.changePosition.bind(this, -1)}>

                                &larr;
                            </button>
                        </MovieItem>

                        <MovieItem
                            className   = "pure-u-1-3 center"
                            poster      = {movieCenter.Poster}
                            title       = {movieCenter.Title}
                            year        = {movieCenter.Year}
                            id          = {movieCenter.imdbID} />

                        <MovieItem
                            className   = "pure-u-1-3"
                            poster      = {movieRight.Poster}
                            title       = {movieRight.Title}
                            year        = {movieRight.Year}
                            id          = {movieRight.imdbID} >

                            <button
                                className="forward"
                                type="button"
                                onClick={this.changePosition.bind(this, 1)}>
                                
                                &rarr;
                            </button>
                        </MovieItem>

                    </div>
                : "" }
           </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            movies: state.movies
        };
    }
)(MovieCarousel);
