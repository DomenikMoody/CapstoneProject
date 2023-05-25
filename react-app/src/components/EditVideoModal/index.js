import { useParams, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { editVideoThunk, getvideoThunk, getSoloVideoThunk } from "../../store/videos";
import { useModal } from '../../context/Modal'
import { getAllVideosThunk } from "../../store/videos";
import "./EditVideoModal.css"


const EditVideoModal = (video) => {
    const videoId = video.video.id
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const { closeModal } = useModal()
    console.log(video, "HERE IS THE VIDEO")

    useEffect(() => {
        dispatch(getSoloVideoThunk(videoId))
    }, [dispatch, videoId])

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [aboutVideo, setAboutVideo] = useState('')
    const [genre, setGenre] = useState('')
    const [error, setError] = useState(null);

    useEffect(() => {
        if (video) {
            setTitle(video.video.title);
            setArtist(video.video.artist);
            setAboutVideo(video.video.aboutVideo)
            setGenre(video.video.genre)
        }
    }, [video, videoId])

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleArtistChange = (e) => {
        setArtist(e.target.value);
    }
    const handleAboutVideoChange = (e) => {
        const text = e.target.value;
        if (text.length <= 250) {
            setAboutVideo(text);
        }
    }
    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            setError('Title is required');
            return;
        }
        if (!artist) {
            setError('Studio is required');
            return;
        }
        if (!aboutVideo) {
            setError('About Video is required');
            return;
        }
        if (!genre) {
            setError('Genre is required');
            return;
        }

        const videoInformation = {
            title: title,
            artist: artist,
            aboutVideo: aboutVideo,
            genre: genre,
        };

        await dispatch(editVideoThunk(videoInformation, videoId));
        await dispatch(getSoloVideoThunk(videoId));
        await dispatch(getAllVideosThunk())
        closeModal();
        history.push(`/manage/`);
    };


    if (!video) return null

    return (
        <div className="editVideoModal">
            <div className="editVideoModalTitle">
                <h1 className="editTitle">Edit Your Video Info</h1>
            </div>
            <form method="PUT" onSubmit={onSubmit}>
                {error && <div className="error">{error}</div>}
                <label>
                    <div>Title</div>
                    <input id="video-title" type="text" value={title} placeholder='Video Title' onChange={handleTitleChange} />
                </label>
                <label>
                    <div>Studio</div>
                    <input id="video-name" type="text" value={artist} placeholder='Video Studio' onChange={handleArtistChange} />
                </label>
                <label>
                    <div>About Video (Max 250 characters)</div>
                    <div className="textareaAndCounter">
                        <textarea id="about-video" value={aboutVideo} placeholder='About Video' onChange={handleAboutVideoChange} style={{ height: '100px', width: '300px' }}></textarea>
                        <div className='character-counter'>{aboutVideo.length}/250</div>
                    </div>

                </label>
                <label>
                    <div>Genre</div>
                    <input id="video-name" type="textarea" value={genre} placeholder='About Video' onChange={handleGenreChange} />
                </label>
                <div className="divforbuttons">
                    <div className='SubmitVideoBtn'>
                        <button className="Updatebutton" type="submit">Update Video</button>
                    </div>
                    <div>
                        <button className="CancelUpdateButton" onClick={() => closeModal()}>Cancel</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default EditVideoModal
