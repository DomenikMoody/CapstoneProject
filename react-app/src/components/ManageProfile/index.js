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
      <OpenModalButton
        buttonText={'UPLOAD A VIDEO'}
        modalComponent={<CreateVideoForm />}
      />
      <div className='videoCardManage'>
        {allvideosArray.length > 0 &&
          allvideosArray.map(video => {
            if (video?.uploader === user?.username) {
              return (
                <div key={video?.id}>
                  <div className='thumbnailManage'>
                    <img className="thumbnail" src={video?.videoImage}></img>
                  </div>
                  <div className='titleManage'>
                    {video?.title}
                  </div>
                  <div>
                    <OpenModalButton
                      buttonText={'Delete Video'}
                      modalComponent={<DeleteModal video={video} />}
                    />
                  </div>
                  <div>
                    <OpenModalButton
                      buttonText={'Update Video'}
                      modalComponent={<EditVideoModal video={video} />}
                    />
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
                  <img className='playlistthumbnail' src={playlist.playlistImage} alt="Playlist Thumbnail" />
                </div>
                <div>
                  {playlist.name}
                </div>
                <div>
                    <OpenModalButton
                      buttonText={'Delete Playlist'}
                      modalComponent={<DeletePlaylist playlist={playlist} />}
                    />
                  </div>
                  <div>
                  <OpenModalButton
                      buttonText={'Update Playlist'}
                      modalComponent={<UpdatePlaylist playlist={playlist} />
                    }
                    />
                    </div>
              </div>
            ))}
        </div>
      </div>

    </div>
  );
}

export default ManageProfile;
