const GET_VIDEOS = "videos/GET_VIDEOS"
const DELETE_VIDEOS = "videos/DELETE_VIDEOS"
const SOLO_VIDEO = "videos/SOLO_VIDEOS"
const CREATE_VIDEO = "videos/CREATE_VIDEOS"
const LIKE_VIDEO = "videos/LIKE_VIDEOS"
const UNLIKE_VIDEO = "videos/UNLIKE_VIDEOS"

const getVideos = (data) => {
    return {
        type: GET_VIDEOS,
        payload: data
    }
};
const getVideo = (data) => {
    return {
        type: SOLO_VIDEO,
        payload: data
    }
}
const createVideo = (data) => {
    return {
        type: CREATE_VIDEO,
        payload: data
    }
}
const deleteVideo = (videoId) => {
    return {
        type: DELETE_VIDEOS,
        payload: videoId
    }
}
export const editVideoThunk = (video, id) => async (dispatch) => {
    console.log(video, "HERE IS THE THUNK VIDEO ")
    console.log(id, "HERE IS THE THUNK ID ")
    const response = await fetch(`/videos/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(video)
    })
    if (response.ok) {
        const data = response.json()
        console.log(data, "HERE IS THE RESPONSE DATA")
        return video
    }
}
export const removeVideoThunk = (videoId) => async (dispatch) => {
    const response = await fetch(`/videos/${videoId}`, { method: 'DELETE' })
    if (response.ok) {
        const data = await response.json()
        await dispatch(deleteVideo(videoId))
        return data
    }
}
export const createVideoThunk = (video) => async (dispatch) => {
    const response = await fetch('/videos/new', {
        method: 'POST',
        body: video,
    });
    if (response.ok){
        const newVideo = await response.json();
        await dispatch(createVideo(newVideo))
    }
}
export const getSoloVideoThunk = (videoId) => async (dispatch)=>{
    const response = await fetch(`/videos/${videoId}`)
    if (response.ok){
        const data = await response.json()
        await dispatch(getVideo(data))
        return data
    }
}
export const getAllVideosThunk = () => async (dispatch) => {
    const response = await fetch("/videos/")
    if (response.ok){
        const data = await response.json()
        await dispatch(getVideos(data))
        return data
    }
}
const initialState = { videos: null , singleVideo: null};
const videoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_VIDEOS:
            newState = Object.assign({}, state.videos)
            action.payload.forEach(video => { newState[video.id] = video })
            return newState
        case SOLO_VIDEO:
            newState = Object.assign({}, state.singleVideo)
            newState[action.payload.id] = action.payload
            return newState
        case CREATE_VIDEO:
            newState = Object.assign({}, state.videos)
            newState[action.payload.id] = action.payload
            return newState
        case DELETE_VIDEOS:
            newState = Object.assign({}, state)
            delete newState[action.payload]
            return newState
        default:
            return state;
    }
}
export default videoReducer
