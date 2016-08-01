import React from "react"

import SiteTitle from "./components/site_title/component"
import Footer from "./components/footer/component"

export default class extends React.Component {
    render() {
        return (
            <div className="pure-g">
                <SiteTitle className="pure-u-1" />
                <div className="pure-u-1">
                    {this.props.children}
                </div>
                <Footer className="pure-u-1" />
            </div>
        );
    }
}
