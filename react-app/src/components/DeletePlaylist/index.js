import { useDispatch } from "react-redux"
import {useModal} from '../../context/Modal'
import { deletePlaylistThunk } from "../../store/playlist"
import "./DeletePlaylist.css"

function DeletePlaylist(playlist){
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deletePlaylistThunk(playlist.playlist.id))
        closeModal()
     }

    return (
        <div>
            <div className="DeleteText">
                <h2>Are you sure you want to delete {playlist.playlist.name}</h2>
            </div>
            <div>
                <button className="DeletePlaylistbtnmodal" onClick={handleDelete}>Delete playlist</button>
            </div>
        </div>

    )
}
export default DeletePlaylist
