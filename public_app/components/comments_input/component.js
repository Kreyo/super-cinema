import React from "react"

import style from "./style.scss"

export default class extends React.Component {
    render() {
        return (
            <div className="comments-input">
                <input 
                    className="author"
                    type="text"
                    placeholder="Author" />
                <textarea
                    className="comment"
                    placeholder="Comment" />
                <button 
                    className="comment"
                    type="button">
            
                    Comment
                </button>
            </div>
        );
    }
}
