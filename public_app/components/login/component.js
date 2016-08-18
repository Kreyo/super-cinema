import React    from "react"
import axios    from "axios"
import { Link, browserHistory } from "react-router"

import style    from "./style.scss"

import logo     from "./small_logo.png" 

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username    : "",
            password    : "",
            loginFailed : false
        };
    }

    login() {
        axios.post("/api/auth", {
                username    : this.state.username,
                password    : this.state.password
            })
            .then((res) => {
                browserHistory.push("/");
            })
            .catch((error) => {
                this.setState({
                    loginFailed : true
                });
            });
    }

    render() {
        return (
            <div className="pure-g login">
                <div className="pure-u-1-2 sign-in">
                    {this.state.loginFailed ?
                        <div className="error">
                            <i className="material-icons">error_outline</i>
                            Username or password was incorrect
                        </div>
                    : ""}

                    <h2>Sign in</h2>
                    <input type="text" placeholder="Username" onChange={(ev) => {
                        this.setState({
                            username    : ev.target.value
                        });
                    }} />
                    <input type="password" placeholder="Password" onChange={(ev) => {
                        this.setState({
                            password    : ev.target.value
                        });
                    }} />
                    <button type="button" onClick={this.login.bind(this)}>Sign in</button>
                </div>

                <div className="pure-u-1-2 register">
                    <Link to="/"><img src={"/" + logo} /></Link>
                    <p>
                        Give an experience of your life with thousands of movies
                        all in HD quality ready for streaming to your devices
                        at the speed of light!
                    </p>
                    <Link to="/register">
                        <button type="button">Create an account</button>
                    </Link>
                </div>
            </div> 
        );
    }
}
