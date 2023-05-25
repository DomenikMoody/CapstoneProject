const GET_ALL_Comment = 'comments/GETAllComment'
const DELETE_COMMENT = 'comments/DeleteComment';

const GetALLCommentAction = (data) => {
    return {
        type: GET_ALL_Comment,
        payload: data
    }
}
const DeleteCommentAction = (commentId) => {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}
export const deleteCommentThunk = (comment) => async (dispatch) => {
    const res = await fetch(`/comments/${comment.id}`, {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'}
    })
    if (res.ok){
        await dispatch(DeleteCommentAction(comment.id))
    } else {
        return false
    }
}
export const editCommentThunk = (formData, commentId) => async dispatch => {
    const res = await fetch (`/comments/${commentId}`, {
        method: 'PUT',
        body: formData
    })
    if (res.ok){
        console.log("RES IS OK")
        return {"message": "comment updated"}
    } else {
        console.log("RES IS NOT OK")
        return {"message" : "comment failed to update"}
    }
}
export const getAllCommentsThunk = () => async dispatch => {
    const res = await fetch('/comments/')
    if (res.ok) {
        const data = await res.json()
        dispatch(GetALLCommentAction(data))
    }
}
export const createCommentsThunk = (formData) => async dispatch => {
    const res = await fetch('/comments/new', {
        method: 'POST',
        body: formData
    })
    if (res.ok) {
        dispatch(getAllCommentsThunk())
    }
}
const initialState = { comments: {} }
const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_Comment: {
            const newState = { allComments: {} }
            action.payload.forEach(comment => newState.allComments[comment.id] = comment)
            return newState
        }
        case DELETE_COMMENT: {
            const newState = {...state, allComments: {...state.comments}}
            console.log(newState, "HERE IS THE NEW STATE")
            delete newState.allComments[action.commentId]
            return newState
        }
        default:
            return state
    }
}
export default commentReducer
