import React from "react"

export default class extends React.Component {
    constructor(props) {
        super(props);
        document.title = `Super cinema - ${props.params.id}`; 
    }

    render() {
        return (
            <h1>Movie: {this.props.params.id}</h1>
        );
    }
}
