import { createStore }  from "redux"
import reducer          from "./redux_reducers"


// Default app state

let initState = {
    user    : {
        name    : null,
        token   : null,
        logged_in: false
    },
    movies  : {},
    options : {
        video_player_visible: false
    },
    comments: {}
};


var store = createStore(reducer, initState);

export default store;
