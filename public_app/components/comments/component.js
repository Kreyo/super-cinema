import React            from "react"

import CommentsList     from "../comments_list/component"
import CommentsInput    from "../comments_input/component"

import style            from "./style.scss"

export default class extends React.Component {
    render() {
        return (
            <div className={"comments " + this.props.className}>
                <h3>Comments</h3>
                <CommentsInput
                    id={this.props.id} />
                <CommentsList
                    id={this.props.id} />
            </div>
        );
    }
}
