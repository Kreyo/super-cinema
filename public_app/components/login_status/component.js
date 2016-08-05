import React                from "react"

import { Link }             from "react-router"
import axios                from "axios"
import { connect }          from "react-redux"
import cookies              from "cookies-js"
import { clearUserData, addUserData }    from "../../redux_actions"

import style                from "./style.scss"

class LoginStatus extends React.Component {

    constructor(props) {
        super(props);

        if (
            !props.user.logged_in &&
            cookies.get("username") &&
            cookies.get("sessionID")
        ) {
            props.login(cookies.get("username"), cookies.get("sessionID"));
        }
    }

    logout() {
        axios.post("/api/auth/logout", {
            username: "admin"
        }).then((res) => {
            this.props.logout();
        });
    }

    render() {
        return (
            <div className={"login-status " + this.props.className}>
                {!this.props.user.logged_in ?
                    <Link to="/login">
                        <span className="box">
                            <i className="material-icons">lock</i>
                            Login
                        </span>
                    </Link>
                :
                    <span className="box">
                        <span className="username">{this.props.user.username}</span>
                        <span className="logout" onClick={this.logout.bind(this)}>
                            <i className="material-icons">lock</i>
                            Logout
                        </span>
                    </span>
                }
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
            logout: () => {
                dispatch(clearUserData());
            },
            login: (username, sessionID) => {
                dispatch(addUserData(username, sessionID));
            }
        };
    }
)(LoginStatus);
