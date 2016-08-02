// Defines redux action types and action creators that can be used in the app

export let actions = {
    CHANGE_VIDEO_VISIBILITY : "CHANGE_VIDEO_VISIBILITY",
    ADD_MOVIES_TO_LIST          : "ADD_MOVIES_TO_LIST"
};

export function changeVideoVisibility(visible) {
    return {
        type    : actions.CHANGE_VIDEO_VISIBILITY,
        visible : visible
    };
}
export function addMoviesToList(movies) {
    return {
        type    : actions.ADD_MOVIES_TO_LIST,
        movies  : movies
    };
}
