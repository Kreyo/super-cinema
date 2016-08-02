import React                from "react"
import { connect }          from "react-redux"
import axios                from "axios"
import { addMoviesToList }  from "../../redux_actions"

import style                from "./style.scss"

import MovieItem            from "../movie_item/component"

class MovieGrid extends React.Component {

    constructor(props) {
        super(props);
        axios.get("/api/movies")
            .then((res) => {
                this.props.setMovies(res.data);
            });
    }

    render() {
        return (
            <div className={"movie-grid " + this.props.className}>
                <h3 className="grid-title">{this.props.title}</h3>

                <ul className="pure-g">
                    {Object.keys(this.props.movies)
                    .filter((key) => {
                        return (this.props.movies[key]
                            .Title
                            .toLowerCase()
                            .indexOf(this.props.filter.toLowerCase()) !== -1);
                    })
                    .map((key) => {
                        return <li className="pure-u-1-4" key={key}>
                            <MovieItem
                                poster      = {this.props.movies[key].Poster}
                                title       = {this.props.movies[key].Title}
                                year        = {this.props.movies[key].Released}
                                id          = {key} />
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}
MovieGrid.propTypes = {
    title   : React.PropTypes.string
};
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
)(MovieGrid);
