import React from "react"

import style from "./style.scss"

import MovieItem from "../movie_item/component"

export default class MovieGrid extends React.Component {
    render() {
        return (
            <div className={"movie-grid " + this.props.className}>
                <h3 className="grid-title">{this.props.title}</h3>

                <ul className="pure-g">
                    <li className="pure-u-1-4">
                        <MovieItem
                            poster      ="http://lorempixel.com/300/400"
                            title       ="This is the best movie ever"
                            year        ="2003" />
                    </li>
                    <li className="pure-u-1-4">
                        <MovieItem
                            poster      ="http://lorempixel.com/300/400"
                            title       ="This is the best movie ever"
                            year        ="2003" />
                    </li>
                    <li className="pure-u-1-4">
                        <MovieItem
                            poster      ="http://lorempixel.com/300/400"
                            title       ="This is the best movie ever"
                            year        ="2003" />
                    </li>
                    <li className="pure-u-1-4">
                        <MovieItem
                            poster      ="http://lorempixel.com/300/400"
                            title       ="This is the best movie ever"
                            year        ="2003" />
                    </li>
                    <li className="pure-u-1-4">
                        <MovieItem
                            poster      ="http://lorempixel.com/300/400"
                            title       ="This is the best movie ever"
                            year        ="2003" />
                    </li>
                    <li className="pure-u-1-4">
                        <MovieItem
                            poster      ="http://lorempixel.com/300/400"
                            title       ="This is the best movie ever"
                            year        ="2003" />
                    </li>
                    <li className="pure-u-1-4">
                        <MovieItem
                            poster      ="http://lorempixel.com/300/400"
                            title       ="This is the best movie ever"
                            year        ="2003" />
                    </li>
                </ul>
            </div>
        );
    }
}
MovieGrid.propTypes = {
    title   : React.PropTypes.string
};
