import React from "react"

import style from "./style.scss"

import MovieItem from "../movie_item/component"

export default class extends React.Component {
    render() {
        return (
            <div className={"movie-carousel " + this.props.className}>
                <div className="pure-g">
                    
                    <MovieItem
                        className   ="pure-u-1-3"
                        poster      ="http://lorempixel.com/300/400"
                        title       ="This is the best movie ever"
                        year        ="2003" >
                        
                        <div className="backward">
                            &larr;
                        </div>
                    </MovieItem>

                    <MovieItem
                        className   ="pure-u-1-3 center"
                        poster      ="http://lorempixel.com/300/400"
                        title       ="This is the best movie ever"
                        year        ="2003" />

                    <MovieItem
                        className   ="pure-u-1-3"
                        poster      ="http://lorempixel.com/300/400"
                        title       ="This is the best movie ever"
                        year        ="2003" >

                        <div className="forward">
                            &rarr;
                        </div>
                    </MovieItem>

                </div>
            </div>
        );
    }
}
