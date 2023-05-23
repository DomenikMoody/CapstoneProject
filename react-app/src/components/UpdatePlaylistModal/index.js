import { useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPlaylistThunk, getOnePlaylistThunk } from "../../store/playlist"
import { updatePlaylistThunk } from "../../store/playlist"
import { useHistory } from "react-router-dom"
import { useModal } from '../../context/Modal'

function UpdatePlaylist(playlist) {
    const dispatch = useDispatch()
    const [isUploading, setIsUploading] = useState(false)
    const history = useHistory()
    const user = useSelector(state=>state.session.user)
    const [name, setName] = useState(playlist.name)
    const [imageFile, setImageFile] = useState(null)
    const { closeModal } = useModal()



    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsUploading(true)
        const formData = new FormData()
        formData.append("name",name)
        if (imageFile){
            formData.append("playlist_image", imageFile)
        }

        await dispatch(updatePlaylistThunk(formData, playlist.playlist.id))
        setTimeout(() => setIsUploading(false), 3000)
        closeModal()
        await dispatch(getAllPlaylistThunk())
    }
return(
    <>
            <form id="edit-playlist-form" method="PUT" onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                    id="edit-playlist-name"
                    type="text"
                    value={name || ''}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label id="outer-label-edit-playlist">
                    Change Playlist Image
                    <input
                    type="file"
                    name="playlistImage"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    className='Picupload' />
                    <label htmlFor="playlistImage" className="uploadbutton" id="inner-label-edit-playlist">
                        <i className="fas fa-cloud-upload-alt"></i>
                        {imageFile ? "Picture Ready to Upload" : "Upload Picture"}
                    </label>
                </label>

                <button id="submit-playlist-edit" className="modalbtn" type="submit">{isUploading ? "Updating..." : "Update Playlist"}</button>

            </form>
        </>
)
}
export default UpdatePlaylist
