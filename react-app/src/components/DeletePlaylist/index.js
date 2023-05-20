import { useDispatch } from "react-redux"
import {useModal} from '../../context/Modal'
import { deletePlaylistThunk } from "../../store/playlist"

function DeletePlaylist(playlist){
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    console.log(playlist, "HERE IS THE PLAYLIST")
    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deletePlaylistThunk(playlist.playlist.id))
        closeModal()
     }

    return (
        <div>
            <div>
                <h2>Are you sure you want to delete {playlist.playlist.name}</h2>
            </div>
            <div>
                <button onClick={handleDelete}>Delete playlist</button>
            </div>
        </div>

    )
}
export default DeletePlaylist
