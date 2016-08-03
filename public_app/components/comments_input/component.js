import React                    from "react"
import { connect }              from "react-redux"
import axios                    from "axios"
import { addCommentsToMovie }   from "../../redux_actions"

import style                    from "./style.scss"

class CommentsInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            "author"    : "",
            "comments"  : ""
        };
    }

    submitComment(ev) {
        let comment = {
            movieID : this.props.id,
            author  : this.state.author,
            comment : this.state.comments
        };

        this.props.setComments([ comment ], this.props.id);
        axios.post(`/api/comments/${this.props.id}`, comment);
    }

    render() {
        return (
            <div className="comments-input">
                <input 
                    className="author"
                    type="text"
                    placeholder="Author"
                    onChange={(ev) => {
                        this.setState({
                            author: ev.target.value
                        });
                    }} />

                <textarea
                    className="comment"
                    placeholder="Comment"
                    onChange={(ev) => {
                        this.setState({
                            comments: ev.target.value
                        });
                    }} />

                <button 
                    className="submit"
                    type="button"
                    onClick={this.submitComment.bind(this)} >
            
                    Submit
                </button>
            </div>
        );
    }
}
export default connect(
    (state) => { return {}; },
    (dispatch) => {
        return {
            setComments: (comments, movieID) => {
                dispatch(addCommentsToMovie(comments, movieID));
            }
        };
    }
)(CommentsInput);
