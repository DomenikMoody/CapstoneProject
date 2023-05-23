import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllVideosThunk } from '../../store/videos';
import { createVideoThunk } from '../../store/videos';
import './CreateVideoForm.css';
import { useModal } from '../../context/Modal';

function CreateVideoForm() {
  const currentUser = useSelector(state => state.session.user);
  const videos = useSelector(state => state.video);
  const videoLength = Object.values(videos).length;
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [currVideoLength, setCurrVideoLength] = useState(videoLength);
  const [file, setFile] = useState(null);
  const [imgFile, setImageFile] = useState(null);
  const [aboutVideo, setAboutVideo] = useState('');
  const [genre, setGenre] = useState('');
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const { closeModal } = useModal();

  useEffect(() => {
    dispatch(getAllVideosThunk());
  }, [dispatch, videoLength]);

  function handleFileUpload(e) {
    const selectedFile = e.target.files[0];
    const allowedFileTypes = ['video/mp4', 'video/m4a', 'video/wmv', 'video/quicktime'];

    if (selectedFile && allowedFileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError('Invalid file type. Only m4a, mp4, wmv, and mov files are allowed.');
    }
  }

  const handleAddImage = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      setError('Title is required');
      return;
    }
    if (!artist) {
      setError('Studio is required');
      return;
    }
    if (file === null) {
      setError('You must attach a video');
      return;
    }
    if (imgFile === null) {
      setError('Thumbnail is required');
      return;
    }
    if (aboutVideo.length > 250) {
      setError('About Video must be 250 characters or less');
      return;
    }
    if (aboutVideo.length === 0) {
      setError('About Video is required');
      return;
    }
    if (!genre){
      setError('genre is required');
      return;
    }

    setIsUploading(true);

    setCurrVideoLength(+videoLength);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('artist', artist);
    formData.append('aws_url', file);
    formData.append('uploader_id', currentUser.id);
    formData.append('video_image', imgFile);
    formData.append('about_video', aboutVideo);
    formData.append('genre', genre);
    await dispatch(createVideoThunk(formData));

    setTimeout(() => setIsUploading(false), 3000);

    history.push(`/manage/`);
    closeModal();
  };

  const handleAboutVideoChange = (e) => {
    const text = e.target.value;
    if (text.length <= 250) {
      setAboutVideo(text);
    }
  };

  return (
    <div className='wholepage'>
      <div>
        <h1 className='uploadHeader'>Upload A New Video</h1>
        <p className='warningupload'>
          We only accept m4a, mp4, wmv, and mov files right now more file types in the future
        </p>
      </div>
      <form className='createvideoform' onSubmit={handleSubmit} encType='multipart/form-data'>
        {error && <div className='error'>{error}</div>}
        <div>
          <label>
            <input
              id='video-upload'
              type='file'
              name='video'
              accept='video/*'
              onChange={handleFileUpload}
              className='VideoUploadbtn'
            />
            <label htmlFor='video-upload' className='uploadbutton'>
              <i className='fas fa-cloud-upload-alt'></i>
              {file ? 'Video Ready to Upload' : 'Click Here to Upload Video'}
            </label>
          </label>
        </div>
        <div className='button-for-used'>
          <label>
            <input
              id='videoImages'
              type='file'
              name='videoPicture'
              accept='image/*'
              onChange={handleAddImage}
              className='videoPicupload'
            />
            <label htmlFor='videoImages' className='uploadbutton'>
              <i className='fas fa-cloud-upload-alt'></i>
              {imgFile ? 'Picture Ready to Upload' : 'Click Here to Upload Thumbnail'}
            </label>
          </label>
        </div>
        <label>
          <div>Title</div>
          <input id='video-title' type='text' value={title} placeholder='Video Title' onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          <div>Studio</div>
          <input id='Studio-name' type='text' value={artist} placeholder='Studio Name' onChange={(e) => setArtist(e.target.value)} />
        </label>
        <label>
          <div>About Video (Max 250 characters)</div>
          <input
            id='about-video'
            type='text'
            value={aboutVideo}
            placeholder='About Video'
            onChange={handleAboutVideoChange}
          />
          <div className='character-counter'>{aboutVideo.length}/250</div>
        </label>
        <label>
          <div>Genre</div>
          <input id='Genre' type='text' value={genre} placeholder='Genre' onChange={(e) => setGenre(e.target.value)} />
        </label>
        <div className='SubmitVideoBtn'>
          <button disabled={isUploading} className='create-video-button' type='submit'>
            {isUploading ? 'Uploading video...' : 'Submit video'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateVideoForm;
