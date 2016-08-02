// Defines redux action types and action creators that can be used in the app

export let actions = {
    CHANGE_VIDEO_VISIBILITY: "CHANGE_VIDEO_VISIBILITY"
};

export function changeVideoVisibility(visible) {
    return {
        type    : "CHANGE_VIDEO_VISIBILITY",
        visible : visible
    }
}
