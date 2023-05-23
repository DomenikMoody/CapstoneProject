import { useDispatch } from "react-redux"
import { deleteVideoFromPlaylistThunk } from "../../store/playlist"
import { useModal } from '../../context/Modal'
import { useHistory } from "react-router-dom"
import "./RemoveVideoFromPlaylist.css"


const RemoveVideoFromPlaylist = ({video, playlistId}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const handleDelete = (e) => {
        e.preventDefault()
        let playlist_id = playlistId
        let video_id = video.id
        dispatch(deleteVideoFromPlaylistThunk(playlist_id, video_id))
        closeModal()
        history.push(`${playlistId}`)
    }

    return (
        <div className="removemodalcontent">
            <h2>Are you sure you want to Remove {video?.title} </h2>
            <div className="modalbuttonsforremove">
                <button className="modalbtn" onClick={handleDelete}>
                Delete Video From Playlist
            </button>
            <button className="modalbtn" onClick={() => closeModal()}>
                Cancel
            </button>
            </div>

        </div>
    )
}


export default RemoveVideoFromPlaylist
