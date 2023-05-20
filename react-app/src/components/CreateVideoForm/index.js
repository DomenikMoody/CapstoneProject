import React, { createContext, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAllVideosThunk } from '../../store/videos'
import { createVideoThunk } from '../../store/videos'
import './CreateVideoForm.css'
import { useModal } from '../../context/Modal'

function CreateVideoForm() {
    const currentUser = useSelector(state => state.session.user);
    const videos = useSelector(state => state.video)
    const videoLength = Object.values(videos).length
    const history = useHistory()
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [currVideoLength, setCurrVideoLength] = useState(videoLength)
    const [file, setFile] = useState(null)
    const [imgFile, setImageFile] = useState(null)
    const [error, setError] = useState(null)
    const [isUploading, setIsUploading] = useState(false)
    const { closeModal } = useModal()


    useEffect(() => {
        dispatch(getAllVideosThunk())
    }, [dispatch, videoLength])

    function handleFileUpload(e) {
        setFile(e.target.files[0])
    }
    const handleAddImage = (e) => {
        setImageFile(e.target.files[0])
    }
    const HandleSubmit = async (e) => {
        e.preventDefault()
        if (!title) {
            setError('Title is required')
            return
        }
        if (!artist) {
            setError('Artist is required')
            return
        }
        if (file === null) {
            setError('video is required')
            return
        }
        if (imgFile === null) {
            setError('Image is required')
            return
        }

        setIsUploading(true)

        setCurrVideoLength(+videoLength)
        const formData = new FormData()
        formData.append("title", title)
        formData.append("artist", artist)
        formData.append("aws_url", file)
        formData.append("uploader_id", currentUser.id)
        formData.append('video_image', imgFile)
        await dispatch(createVideoThunk(formData))

        setTimeout(() => setIsUploading(false), 3000)

        history.push(`/manage/${currentUser.id}`)
        closeModal()
    }

    return (
        <div className='wholepage'>
            <form className='createvideoform' onSubmit={HandleSubmit} encType="multipart/form-data">
                {error &&
                    <div className="error">
                        {error}
                    </div>}
                <div>
                    <label>
                        <input id="video-upload" type="file" name="video" accept="video/*" onChange={handleFileUpload} className='VideoUploadbtn' />
                        <label htmlFor="video-upload" className="uploadbutton">
                            <i className="fas fa-cloud-upload-alt"></i>
                            {file ? "Video Ready to Upload" : "Upload Video"}
                        </label>
                    </label>
                </div>
                <div className='button-for-used'>
                    <label>
                        <input id="videoImages"
                        type="file"
                        name="videoPicture"
                        accept="image/*"
                        onChange={handleAddImage}
                        className='videoPicupload' />
                        <label htmlFor="videoImages" className="uploadbutton">
                            <i className="fas fa-cloud-upload-alt"></i>
                            {imgFile ? "Picture Ready to Upload" : "Upload Thumbnail"}
                        </label>
                    </label>
                </div>
                <label>
                    <div>Title</div>
                    <input id="video-title" type="text" value={title} placeholder='Video Title' onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    <div>Artist</div>
                    <input id="artist-name" type="text" value={artist} placeholder='Artist Time' onChange={(e) => setArtist(e.target.value)} />
                </label>
                <div className='SubmitVideoBtn'>
                    <button disabled={isUploading} className="create-video-button" type="submit">{isUploading ? "Uploading video..." : "Submit video"}</button>
                </div>
            </form>
        </div>
    )
}

export default CreateVideoForm
