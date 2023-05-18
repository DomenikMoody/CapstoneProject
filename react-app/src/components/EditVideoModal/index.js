import { useParams, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { editVideoThunk, getvideoThunk, getSoloVideoThunk } from "../../store/videos";
import {useModal} from '../../context/Modal'


const EditVideoModal = (video) => {
    const videoId  = video.video.id
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const {closeModal} = useModal()

    useEffect(() => {
        dispatch(getSoloVideoThunk(videoId))
    }, [dispatch, videoId])

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');

    useEffect(() => {
        if (video) {
            setTitle(video.title);
            setArtist(video.artist);
        }
    }, [video, videoId])

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleArtistChange = (e) => {
        setArtist(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const videoInformation = {
            title: title,
            artist: artist,
        }
        await dispatch(editVideoThunk(videoInformation, videoId))
        await dispatch(getSoloVideoThunk(videoId))
        closeModal()
        history.push(`/manage/${user.id}`)
    }


    if (!video) return null

    return (
        <form method="PUT" onSubmit={onSubmit}>
            <label>
                <div>Title</div>
                <input id="video-title" type="text" value={title} placeholder='Video Title' onChange={handleTitleChange} />
            </label>
            <label>
                <div>Artist</div>
                <input id="video-name" type="text" value={artist} placeholder='Video Studio' onChange={handleArtistChange} />
            </label>
            <div className='SubmitVideoBtn'>
                <button className="create-video-button" type="submit">Update Video</button>
            </div>
            <div>
                <button className="CancelUpdateButton" onClick={() => closeModal()}>Cancel</button>
            </div>
        </form>
    )
}

export default EditVideoModal
