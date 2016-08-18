import React                    from "react"
import { connect }              from "react-redux"
import axios                    from "axios"
import { addCommentsToMovie }   from "../../redux_actions"

import style                    from "./style.scss"

class CommentsList extends React.Component {

    constructor(props) {
        super(props);
        if (!props.comments[props.id]) {
            axios.get(`/api/comments/${props.id}`)
                .then((res) => {
                    this.props.setComments(res.data, props.id);
                });
        }
    }

    generateComments() {
        let comments = this.props.comments[this.props.id];
        if(comments && comments.length !== 0) {
            return comments.map((comment, index) => {
                return (
                    <li key={index}>
                        <h4>{comment.author}</h4>
                        <p>{comment.comment}</p>
                    </li>              
                )
            }).reverse();
        } else {
            return <li><h4>Noone has commented on this movie</h4></li>;
        }
    }

    render() {
        return (
            <ul className="comments-list">
                {this.generateComments()}
            </ul>
        );
    }
}
export default connect(
    (state) => {
        return {
            comments: state.comments
        };
    },
    (dispatch) => {
        return {
            setComments: (comments, movieID) => {
                dispatch(addCommentsToMovie(comments, movieID));
            }
        };
    }
)(CommentsList);
