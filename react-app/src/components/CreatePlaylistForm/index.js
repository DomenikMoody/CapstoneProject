import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createPlaylistThunk } from "../../store/playlist"
import { getAllVideosThunk } from "../../store/videos"
import { useHistory } from "react-router-dom"
import "./CreatePlaylistForm.css"


const PlaylistForm = () => {
    const user = useSelector(state => state.session.user)
    const allVideos = useSelector(state => state.video)
    const history = useHistory()
    const dispatch = useDispatch()
    const [checked, setChecked] = useState([])
    const [name, setName] = useState('')
    const [imgFile, setImageFile] = useState(null)
    const [error, setError] = useState(null)
    const [isUploading, setIsUploading] = useState(false)

    const allVideosArray = Object.values(allVideos)


    useEffect(() => {
        dispatch(getAllVideosThunk())
    }, [dispatch])


    if (!allVideosArray) {
        return null
    }

    const handleAddImage = (e) => {
        setImageFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name) {
            setError("Name is required for the playlist");
            return;
        }
        if (!checked.length) {
            setError("Please select at least one video for the playlist");
            return;
        }
        if (imgFile === null) {
            setError('Image is required for the playlist')
            return
        }

        setIsUploading(true)

        const formData = new FormData()

        formData.append('user_id', user?.id)
        formData.append('name', name)
        formData.append('playlist_image', imgFile)
        formData.append('playlist_videos', checked.join(','))

        await dispatch(createPlaylistThunk(formData))

        setTimeout(() => setIsUploading(false), 3000)

        history.push('/')

    }

    const handelCheckBox = (e) => {
        if (e.target.checked) {
            setChecked([
                ...checked, e.target.value
            ])
        } else {
            setChecked(
                checked.filter((video) => video !== e.target.value)
            )
        }
    }


    return (
        <div className="Entirepage">
            <form className="createplaylistformdiv" onSubmit={handleSubmit}>
                {error &&
                    <div className="error">
                        {error}
                    </div>}
                <div className="topOfPage">
                    <div className="playlistImageform">
                        <input id="playlistImagesform"
                            type="file"
                            name="playlistPicture"
                            accept="image/*"
                            onChange={handleAddImage}
                            className="playlistImageBtn" />
                        <label htmlFor="playlistImagesform" className="upload-button">
                            <i className="fas fa-cloud-upload-alt"></i>
                            {imgFile ? "Picture Ready to Upload" : "Upload Photo"}
                        </label>

                    </div>
                    <div className="playlistnameDiv">
                        <label>
                            Name Your Playlist
                            <div>

                                <input
                                    id="playlistName"
                                    placeholder={`My Playlist`}
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                        </label>
                    </div>
                </div>
                <div className="allvideosContainer">
                    {allVideosArray.map(video =>
                        <div className="allvideos">
                            <label>
                                <div className='VideoCard'>
                                    <div className='videoThumbNail'>
                                        <img src={video?.videoImage}></img>
                                    </div>
                                    <div className='videoTitle'>
                                        {video?.title}
                                    </div>
                                    <div className='videoStudio'>
                                        Studio: {video?.artist}
                                    </div>
                                </div>
                                <input
                                    type="checkbox"
                                    name='video'
                                    value={video?.id}
                                    onChange={handelCheckBox}
                                />
                            </label>
                        </div>)}
                </div>
                <div className='SubmitPlaylistBtn'>
                    <button isabled={isUploading} className="create-playlist-button" type="submit">{isUploading ? "Creating playlist..." : "Create Playlist"}</button>
                </div>
            </form>
        </div>
    )
}


export default PlaylistForm
