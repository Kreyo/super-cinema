import React from "react"

import SiteTitle        from "../components/site_title/component"
import SearchBox        from "../components/search_box/component"
import MovieCarousel    from "../components/movie_carousel/component"
import MovieGrid        from "../components/movie_grid/component"
import Footer           from "../components/footer/component"
import LoginStatus      from "../components/login_status/component"


export default class extends React.Component {
    constructor(props) {
        super(props);
        document.title = `Super Cinema - the best cinema in the world!`;

        this.state = {
            filter: ""
        };
    }

    setFilter(filter) {
        this.setState({
            filter: filter.target.value
        });
    }

    searchIsActive() {
        return this.state.filter === "" ?  false : true;
    }

    render() {
        return (
            <div className="pure-g">
                <LoginStatus className="pure-u-1" />
                <SiteTitle className="pure-u-2-3" />

                <SearchBox
                    className   = "pure-u-1-3"
                    onSearch    = {this.setFilter.bind(this)} />
                { this.searchIsActive() ? "" : <MovieCarousel className="pure-1-1" /> }

                <MovieGrid 
                    className   = "pure-1-1"
                    title       = {this.searchIsActive() ? "Search results" : "Available movies"}
                    filter      = {this.state.filter} />

                <Footer className="pure-u-1" />
            </div>
        );
    }
}
