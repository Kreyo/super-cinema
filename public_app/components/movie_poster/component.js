import React                        from "react"
import { connect }                  from "react-redux"
import { changeVideoVisibility }    from "../../redux_actions"

import MovieTrailer                 from "../movie_trailer/component"

import style                        from "./style.scss"

class MoviePoster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerVisible: props.playerVisible || false
        };
    }

    componentWillReceiveProps(newProps) {
        if (typeof newProps.playerVisible !== "undefined") {
            this.setState({playerVisible: newProps.playerVisible});
        }
    }

    render() {
        return (
            <div className={"movie-poster " + this.props.className}>
                <img src="http://lorempixel.com/300/400" />
                <i className="material-icons" onClick={this.props.togglePlayer.bind(this, true)}>play_circle_filled</i>

                {this.state.playerVisible ? <MovieTrailer closeAction={this.props.togglePlayer.bind(this, false)} /> : ""}
            </div>
        );
    }
}
 
// Redux nonsense
export default connect(
    (state) => {
        return {
            playerVisible: state.options.video_player_visible
        }
    },
    (dispatch) => {
        return {
            togglePlayer: (visibility) => {
                dispatch(changeVideoVisibility(visibility));
            }
        }
    }
)(MoviePoster);
