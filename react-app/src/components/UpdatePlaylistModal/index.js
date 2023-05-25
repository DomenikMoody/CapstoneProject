import {  useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPlaylistThunk} from "../../store/playlist"
import { updatePlaylistThunk } from "../../store/playlist"
import { useModal } from '../../context/Modal'
import "./UpdatePlaylistModal.css"

function UpdatePlaylist(playlist) {
    const dispatch = useDispatch()
    const [isUploading, setIsUploading] = useState(false)
    const [name, setName] = useState(playlist.name)
    const [imageFile, setImageFile] = useState(null)
    const { closeModal } = useModal()



    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsUploading(true)
        const formData = new FormData()
        formData.append("name", name)
        if (imageFile) {
            formData.append("playlist_image", imageFile)
        }

        await dispatch(updatePlaylistThunk(formData, playlist.playlist.id))
        setTimeout(() => setIsUploading(false), 3000)
        closeModal()
        await dispatch(getAllPlaylistThunk())
    }
    return (
        <div className="UpdatePlaylistFormPage">
            <div className="edit-playlist-form">
                <div>
                    <h1>Update {playlist.playlist.name} Here</h1>
                </div>
                <form id="edit-playlist-form" method="PUT" onSubmit={handleSubmit}>
                    <div className="UpdatePlaylistFormDiv">
                    <label id="outer-label-edit-playlist">
                        <input
                            type="file"
                            id="UpdatePlaylistImage"
                            name="playlistImage"
                            accept="image/*"
                            onChange={(e) => setImageFile(e.target.files[0])}
                            className='Picupload' />
                        <label htmlFor="UpdatePlaylistImage" className="uploadbutton" id="inner-label-edit-playlist">
                            <i className="fas fa-cloud-upload-alt"></i>
                            {imageFile ? "Picture Ready to Upload" : "Upload Picture Here"}
                        </label>
                    </label>
                        <label>
                            <div className="UpdatePlaylistName">
                                Name
                            </div>
                            <input
                                id="edit-playlist-name"
                                type="text"
                                value={name || ''}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="UpdatePlaylistSubmitButton">
                        <button id="submit-playlist-edit" className="modalbtn" type="submit">{isUploading ? "Updating..." : "Update Playlist"}</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default UpdatePlaylist
