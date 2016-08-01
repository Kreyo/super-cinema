import React from "react"

export default class extends React.Component {
    constructor(props) {
        super(props);
        document.title = `Super cinema - ${props.params.id}`; 
    }

    render() {
        return (
            <div className="pure-g">
                <div className="pure-u-1">
                    <div className="pure-g">
                        <div className="pure-u-1-2">
                            <img src="http://lorempixel.com/300/400" />
                            <i className="material-icons">play_circle_filled</i>
                        </div>

                        <div className="pure-u-1-2">
                            <h2 className="movie-title">Movie title</h2>
                            <p className="movie-date">Released in 2003</p>
                            <p className="movie-genre">Action, horror</p>
                            <h3>Description</h3>
                            <p className="movie-description">
                                I am a movie description that is booring and short
                            </p>
                            <h3>Director</h3>
                            <p>John Bumshmit</p>
                            <h3>Cast</h3>
                            <ul className="movie-cast">
                                <li>Ben Chapleck</li>
                                <li>Captain crisp</li>
                                <li>Bannana banderosa</li>
                                <li>Steeven Sequel</li>
                                <li>John "the magic" Mickey</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
