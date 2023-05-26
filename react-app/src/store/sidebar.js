const GET_VIDEOS = "videos/GET_VIDEOS"
const GET_ALL_PLAYLIST = 'playlists/GetAllPlaylist';

const getVideos = (data) => {
    return {
        type: GET_VIDEOS,
        payload: data
    }
};
const GetAllPlaylistAction = (data) => {
    return {
        type: GET_ALL_PLAYLIST,
        payload: data
    }
}
export const getAllPlaylistforSidebarThunk = () => async dispatch => {
    const res = await fetch('/playlists/')

    if (res.ok) {
        const data = await res.json()
        dispatch(GetAllPlaylistAction(data))
    }
}
export const getAllVideosforSidebarThunk = () => async (dispatch) => {
    const response = await fetch("/videos/")
    if (response.ok) {
        const data = await response.json()
        await dispatch(getVideos(data))
        return data
    }
}

const initialState = { videos: {}, allPlaylists: {} }
const sidebarReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_VIDEOS:
            newState = { videos: {}, allPlaylists: {}}
            action.payload.forEach(video => { newState.videos[video.id] = video })
            return newState
        case GET_ALL_PLAYLIST: {
            newState = { videos: {}, allPlaylists: {}}
            action.payload.forEach(playlist => newState.allPlaylists[playlist.id] = playlist)
            return newState
        }
        default:
            return state;
    }
}
export default sidebarReducer
