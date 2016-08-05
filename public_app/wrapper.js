/* Wrapper for pages so header and footer modules would be on the page without adding them */

import React from "react"

import SiteTitle    from "./components/site_title/component"
import Footer       from "./components/footer/component"
import LoginStatus  from "./components/login_status/component"

export default class extends React.Component {
    render() {
        return (
            <div className="pure-g">
                <LoginStatus className="pure-u-1" />
                <SiteTitle className="pure-u-1" />
                <div className="pure-u-1">
                    {this.props.children}
                </div>
                <Footer className="pure-u-1" />
            </div>
        );
    }
}
