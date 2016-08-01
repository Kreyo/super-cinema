import React from "react"

import style from "./style.scss"

export default class extends React.Component {
    render() {
        return (
            <div className="movie-trailer">
                <div className="pure-g">
                    <div className="pure-u-1 close">
                        <button 
                            type="button"
                            onClick={this.props.closeAction}
                            className="material-icons">

                            close
                        </button>
                    </div>
                    <div className="pure-u-1">
                        <iframe
                            width="100%"
                            height="600px"
                            className="video"
                            src="https://www.youtube.com/embed/Q7y8oHI-W3M?autoplay=1"
                            frameborder="0"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}
