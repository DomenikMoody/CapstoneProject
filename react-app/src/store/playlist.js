const GET_ALL_PLAYLIST = 'playlists/GetAllPlaylist';
const GET_ONE_PLAYLIST = 'playlists/GetOnePlaylist';
const CREATE_PLAYLIST = 'playlists/CreatePlaylist';
const DELETE_PLAYLIST = 'playlists/DeletePlaylist';
const DELETE_VIDEO_FROM_PLAYLIST = 'playlists/DeleteVideoFromPlaylist'

const DeletePlaylistAction = (playlistId) => {
    return {
        type: DELETE_PLAYLIST,
        payload: playlistId
    }
}
const GetAllPlaylistAction = (data) => {
    return {
        type: GET_ALL_PLAYLIST,
        payload: data
    }
}
const GetOnePlaylistAction = (playlist) => {
    return {
        type: GET_ONE_PLAYLIST,
        payload: playlist
    }
}
const CreatePlaylistAction = (playlist) => {
    return {
        type: CREATE_PLAYLIST,
        payload: playlist
    }
}
export const deletePlaylistThunk = (playlistId) => async (dispatch) => {
    const res = await fetch(`/playlists/${playlistId}`, {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'}
    })
    if (res.ok){
        await dispatch(DeletePlaylistAction(playlistId))
    } else {
        return false
    }
}
export const getOnePlaylistThunk = (id) => async dispatch => {

    const res = await fetch (`/playlists/${Number(id)}`)

    if (res.ok) {

        const data = await res.json()

        dispatch(GetOnePlaylistAction(data))
    }
}
export const deleteVideoFromPlaylistThunk = (playlist_id, video_id) => async dispatch => {
    const res = await fetch(`/playlists/${playlist_id}/delete/${video_id}`,{
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(playlist_id, video_id)
    })

    if (res.ok){
        const newRes = await res.json()
        dispatch(getAllPlaylistThunk())
        return newRes
    } else {
        return false
    }
}
export const getAllPlaylistThunk = () => async dispatch => {
    const res = await fetch('/playlists/')

    if (res.ok) {
        const data = await res.json()
        dispatch(GetAllPlaylistAction(data))
    }
}
export const createPlaylistThunk = (formData) => async dispatch => {
    const res = await fetch('/playlists/new', {
        method: 'POST',
        body: formData
    })
    if (res.ok) {
        const data = await res.json()

        dispatch(CreatePlaylistAction(data))
    } else {
        return false
    }
}
export const updatePlaylistThunk = (formData, playlistId) => async dispatch => {
    const res = await fetch (`/playlists/${playlistId}`, {
        method: 'PUT',
        body: formData
    })

    if (res.ok){
        return {"message": "playlist updated"}
    } else {
        return {"message": "playlist failed to update"}
    }
}
export const addVideoToPlaylistThunk = (playlist_ids, video_id) => async(dispatch) => {
    const res = await fetch (`/playlists/add`, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({playlist_ids, video_id})
    })
    if (res.ok){
        return {"message": "video added to playlist"}
    } else {
        return {"message": "video failed to be added to playlist"}
    }
}

const initialState = { allPlaylists:{}, singlePlaylist:{}, singleVideo:{} }

const playlistReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_ALL_PLAYLIST: {
            const newState = { allPlaylists: {}, singlePlaylist: {} }
            action.payload.forEach(playlist => newState.allPlaylists[playlist.id] = playlist)
            return newState
        }
        case GET_ONE_PLAYLIST: {
            const newState  = { ...state, singlePlaylist: {...state.singlePlaylist}}
            newState.singlePlaylist = action.playlist
            return newState
        }
        case CREATE_PLAYLIST: {
            const newState = {...state, allPlaylists: {...state.allPlaylists}}
            newState.allPlaylists[action.payload.id] = action.payload
            return newState
        }
        case DELETE_PLAYLIST: {
            const newState = {...state, allPlaylists: {...state.allPlaylists}}
            delete newState.allPlaylists[action.payload]
            return newState
        }
        default:
            return state
    }
}

export default playlistReducer
