import React from "react"

import SiteTitle        from "../components/site_title/component"
import SearchBox        from "../components/search_box/component"
import MovieCarousel    from "../components/movie_carousel/component"
import MovieGrid        from "../components/movie_grid/component"
import Footer           from "../components/footer/component"


export default class extends React.Component {
    constructor(props) {
        super(props);
        document.title = `Super Cinema - the best cinema in the world!`;
    }

    render() {
        return (
            <div className="pure-g">
                <SiteTitle className="pure-u-2-3" />

                <SearchBox className="pure-u-1-3" />

                <MovieCarousel className="pure-1-1" />

                <MovieGrid 
                    className   ="pure-1-1"
                    title       ="Newest releases" />

                <Footer className="pure-u-1" />
            </div>
        );
    }
}
