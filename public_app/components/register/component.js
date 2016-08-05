import React    from "react"
import axios    from "axios"
import { Link, browserHistory } from "react-router"

import style    from "./style.scss"

import logo     from "./small_logo.png" 

export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username    : "",
            password    : "",
            registrationFailed: false
        };

    }

    register() {
        axios.post("/api/auth/register", {
                username    : this.state.username,
                password    : this.state.password
            })
            .then((res) => {
                this.setState({
                    registrationFailed : false 
                });
                browserHistory.push("/login");
            })
            .catch((error) => {
                this.setState({
                    registrationFailed : true
                });
            });
    }

    render() {
        return (
            <div className="pure-g login">
                <div className="pure-u-1-2 sign-in">
                    {this.state.registrationFailed ?
                        <div className="error">
                            <i className="material-icons">error_outline</i>
                            Registration failed, either user exists or
                            we have technical issues.
                        </div>
                    : ""}

                    <h2>Sign up</h2>
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
                    <button type="button" onClick={this.register.bind(this)}>Sign up</button>
                </div>

                <div className="pure-u-1-2 register">
                    <img src={"/" + logo} />
                    <p>
                        Give an experience of your life with thousands of movies
                        all in HD quality ready for streaming to your devices
                        at the speed of light!
                    </p>
                </div>
            </div> 
        );
    }
}
