import React                    from "react"
import { connect }              from "react-redux"
import axios                    from "axios"
import { addCommentsToMovie }   from "../../redux_actions"

import style                    from "./style.scss"

class CommentsInput extends React.Component {

    constructor(props) {
        super(props);

        if(this.props.user.logged_in) {
            var author = `${this.props.user.username} (Registered user)`;
        } else {
            var author = "";
        }

        this.state = {
            author  : author,
            comments: ""
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

        this.clearCommentField();
    }

    clearCommentField() {
        this.setState({
            comments: ""
        });
    }

    render() {
        return (
            <div className="comments-input">
                {!this.props.user.logged_in ?
                    <input 
                        className="author"
                        type="text"
                        placeholder="Author"
                        onChange={(ev) => {
                            this.setState({
                                author: ev.target.value
                            });
                        }} /> : "" }

                <textarea
                    className="comment"
                    placeholder="Comment"
                    onChange={(ev) => {
                        this.setState({
                            comments: ev.target.value
                        });
                    }} 
                    value={this.state.comments}/>

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
    (state) => { 
        return {
            user: state.user
        }; 
    },
    (dispatch) => {
        return {
            setComments: (comments, movieID) => {
                dispatch(addCommentsToMovie(comments, movieID));
            }
        };
    }
)(CommentsInput);
