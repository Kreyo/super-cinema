import React from "react"

import style from "./style.scss"

export default class MovieItem extends React.Component {
    render() {
        return (
            <div className={"movie-item " + this.props.className}>
                <img src={this.props.poster} />

                <div className="description">
                    <h3>{this.props.title}</h3>
                    <span>({this.props.year})</span>
                </div>

                {this.props.children}
            </div>
        );
    }
}

MovieItem.propTypes = {
    poster  : React.PropTypes.string.isRequired,
    title   : React.PropTypes.string.isRequired,
    year    : React.PropTypes.string
};
