import React    from "react"

import style    from "./style.scss"

import logo     from "./small_logo.png" 

export default class Login extends React.Component {
    render() {
        return (
            <div className="pure-g login">
                <div className="pure-u-1-2 sign-in">
                    <div className="error">
                        <i className="material-icons">error_outline</i>
                        Username or password was incorrect
                    </div>
                    <h2>Sign in</h2>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="button">Sign in</button>
                </div>

                <div className="pure-u-1-2 register">
                    <img src={"/" + logo} />
                    <p>
                        Give an experience of your life with thousands of movies
                        all in HD quality ready for streaming to your devices
                        at the speed of light!
                    </p>
                    <button type="button">Create an account</button>
                </div>
            </div> 
        );
    }
}
