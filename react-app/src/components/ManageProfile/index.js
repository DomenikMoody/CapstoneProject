import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllVideosThunk } from '../../store/videos';
import OpenModalButton from '../OpenModalButton';
import CreateVideoForm from '../CreateVideoForm';
import './ManageProfile.css';
import DeleteModal from '../DeleteVideoModal';
import EditVideoModal from '../EditVideoModal';
import { getAllPlaylistThunk } from "../../store/playlist";
import DeletePlaylist from '../DeletePlaylist';
import UpdatePlaylist from '../UpdatePlaylistModal';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import {faPenFancy} from '@fortawesome/free-solid-svg-icons'





function ManageProfile() {
  const user = useSelector(state => state.session.user);
  const allvideos = useSelector(state => state.video);
  const allvideosArray = Object.values(allvideos);
  const allPlaylist = useSelector(state => state.playlist.allPlaylists)
  const dispatch = useDispatch();
  const userPlaylist = Object.values(allPlaylist)
    .filter(playlist => playlist.userId === user.id)
    .map(playlist => playlist);

  useEffect(() => {
    dispatch(getAllPlaylistThunk())
    dispatch(getAllVideosThunk());
  }, [dispatch, Object.values(allPlaylist).length]);

  return (
    <div>
      <h1>Manage Your Profile</h1>
      <h2>HERE ARE ALL THE VIDEOS {user.name} UPLOADED</h2>
      <div className="UploadAVideo">
        <OpenModalButton
          buttonText={<i className="fas fa-cloud-upload-alt">UPLOAD A VIDEO</i>}
          modalComponent={<CreateVideoForm />}
        />
      </div>

      <div className='videoCardManage'>
        {allvideosArray.length > 0 &&
          allvideosArray.map(video => {
            if (video?.uploader === user?.username) {
              return (
                <div classname="VideoCardContainermanage" key={video?.id}>
                  <div className='VideoCard'>
                    <NavLink className="ManageVideoLinks" to={`/video/${video?.id}`}>
                      <div className='videoThumbNail'>
                        <img src={video?.videoImage}></img>
                      </div>
                      <div className='videoTitle'>
                        {video?.title}
                      </div>
                      <div className='videoStudio'>
                        Studio: {video?.artist}
                      </div>
                    </NavLink>
                  <div className='DeleteAndUpdate'>
                    <div className="deleteButton">
                      <OpenModalButton
                        buttonText={<FontAwesomeIcon icon={faMinusCircle} style={{color: "#fa0000",}} />}
                        modalComponent={<DeleteModal video={video} />}

                      />
                    </div>
                    <div className='editButton'>
                      <OpenModalButton
                        buttonText={<FontAwesomeIcon icon={faPenFancy} style={{color: "#DE9E48",}} />}
                        modalComponent={<EditVideoModal video={video} />}
                      />
                    </div>
                  </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
      </div>
      <div>
        <h2>HERE ARE ALL THE PLAYLISTS YOU CREATED</h2>
        <div className='playlistCard'>
          {userPlaylist.length > 0 &&
            userPlaylist.map(playlist => (
              <div key={playlist.id}>
                <div className='playlistthumbnail'>
                  <img className='playlistthumbnailimage' src={playlist.playlistImage} alt="Playlist Thumbnail" />
                </div>
                <div>
                  {playlist.name}
                </div>
                <div className='PlaylistBtns'>
                <div className='DeletePlaylistbtn'>
                  <OpenModalButton
                    buttonText={<FontAwesomeIcon icon={faMinusCircle} style={{color: "#fa0000",}} />}
                    modalComponent={<DeletePlaylist playlist={playlist} />}
                    />
                </div>
                <div className='UpdatePlaylistbtn'>
                  <OpenModalButton
                    buttonText={<FontAwesomeIcon icon={faPenFancy} style={{color: "#DE9E48",}} />}
                    modalComponent={<UpdatePlaylist playlist={playlist} />
                  }
                  />
                </div>
                  </div>

              </div>
            ))}
        </div>
      </div>

    </div>
  );
}

export default ManageProfile;
