import { actions } from "./redux_actions"


// Option object composited reducer
let optionReducer = (opt, action) => {
    switch(action.type) {

    case actions.CHANGE_VIDEO_VISIBILITY:
        return Object.assign({}, opt, {
            video_player_visible: action.visible
        });
    default:
        return opt;
    }
};

// Redux reducer that calculates new states when actions are passed to it
export default function(state, action) {
    switch(action.type) {

    case actions.CHANGE_VIDEO_VISIBILITY:
        return Object.assign({}, state, {
            options: optionReducer(state.options, action)
        })
    default:
        return state; 
    }
}

