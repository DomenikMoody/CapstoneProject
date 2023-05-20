import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSoloVideoThunk } from "../../store/videos";

function SingleVideoPage() {
    const params = useParams()
    const videoId = params.videoid
    const soloVideo = useSelector(state => state.video)
    const dispatch = useDispatch()
    const pageVideo = soloVideo[videoId]

    useEffect(() => {
        dispatch(getSoloVideoThunk(videoId))
    }, [dispatch])

    return (
        <>
            <div>
                <video width="100%" height="100%" controls>
                    <source src={pageVideo?.awsUrl} type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default SingleVideoPage;
