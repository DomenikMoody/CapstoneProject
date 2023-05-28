import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { likeVideoThunk, unlikeVideoThunk } from "../../store/videos"
import { getUserByIdThunk } from "../../store/session"
import { getSoloVideoThunk } from "../../store/videos"

function LikeForm({video}){
    const dispatch = useDispatch()
    const user = useSelector(state => state.session)
    console.log(user)

    const isVideoLiked = () => {
        for (let videoId of user.user.likes) {
            if (videoId === video.id) {
                return true
            }
        }
        return false
    }

    const [liked, setLiked] = useState(isVideoLiked())

    const handleLike = async (e) => {
        e.stopPropagation()
        setLiked(true)
        await dispatch(likeVideoThunk(video.id, user.user.id))
        await dispatch(getSoloVideoThunk(video.id))
    }

    const handleUnlike = async (e) => {
        e.stopPropagation()
        setLiked(false)
        await dispatch(unlikeVideoThunk(video.id, user.user.id))
        await dispatch(getSoloVideoThunk(video.id))
    }

    useEffect(() => {
        dispatch(getUserByIdThunk(user.user.id))
        },[liked])

    return (

        <>
        {(liked && <i
                    class="fas fa-thumbs-up"
                    style={{color: "#DE9E48"}}
                    onClick={handleUnlike}></i>)
                || <i
                    class="far fa-thumbs-up"
                    onClick={handleLike}></i>}
        </>
    )
}

export default LikeForm
