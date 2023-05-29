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
import UserProileModal from '../UpdateUserProfileModal';

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
    dispatch(getAllPlaylistThunk());
    dispatch(getAllVideosThunk());
  }, [dispatch, Object.values(allPlaylist).length]);

  return (
    <div className='EntirePage'>
      <h1 className='TitletoPage'>Manage Your Profile</h1>
      <div className="banner">
        <div className='flexmanagepage'>
          <div className="user-profile-pic">
            <img className='ManageProfilePic' src={user?.profileImage?.length === 0 ? "https://static1.squarespace.com/static/5898e29c725e25e7132d5a5a/58aa11bc9656ca13c4524c68/58aa11e99656ca13c45253e2/1487540713345/600x400-Image-Placeholder.jpg?format=original" : user?.profileImage} />
          </div>
          <div>
            <div className="username">
              <h1 className='TitletoPage'>{user?.firstName === null ? "Update Your Profile Info" : user?.firstName}{' '}{user?.lastName}</h1>
            </div>
            <div className="bioStuff">
              <h2>{user?.bio?.length === 0 ? "ADD A BIO TO YOUR ACCOUNT!!!!!" : user?.bio}</h2>
              <div className='updateuseProfilebtn'>
                <OpenModalButton
                  buttonText="Update User Profile"
                  modalComponent={<UserProileModal />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className='TitletoPage'>HERE ARE ALL THE VIDEOS {user.name} UPLOADED</h2>
      <div className="UploadAVideo">
        <OpenModalButton
          buttonText={<i className="fas fa-cloud-upload-alt">UPLOAD A VIDEO</i>}
          modalComponent={<CreateVideoForm />}
        />
      </div>

      <div className='videoCardManage'>
        {allvideosArray.some(video => video?.uploader === user?.username) ? (
          allvideosArray.map(video => {
            if (video?.uploader === user?.username) {
              return (
                <div className="VideoCardContainermanage" key={video?.id}>
                  <div className='VideoCard'>
                    <NavLink className="ManageVideoLinks" to={`/video/${video?.id}`}>
                      <div className='videoThumbNail'>
                        <img src={video?.videoImage} alt="Video Thumbnail" />
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
                          buttonText={<i class="fas fa-minus-circle" ></i>}
                          modalComponent={<DeleteModal video={video} />}
                        />
                      </div>
                      <div className='editButton'>
                        <OpenModalButton
                          buttonText={<i class="fas fa-pen-fancy"></i>}
                          modalComponent={<EditVideoModal video={video} />}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })
        ) : (
          <div className="noVideosMessage">
            You haven't uploaded any videos yet... but soon we hope.
          </div>
        )}
      </div>

      <div>
        <h2 className='TitletoPage'>HERE ARE ALL THE PLAYLISTS YOU CREATED</h2>
        <div className='playlistCard'>
          {userPlaylist.length > 0 ? (
            userPlaylist.map(playlist => (
              <div key={playlist.id}>
                <div className='playlistthumbnail'>
                  <img className='playlistthumbnailimage' src={playlist.playlistImage} alt="Playlist Thumbnail" />
                </div>
                <div className="sidebarplaylistName">
                  {playlist.name.length > 11
                    ? playlist.name.substring(0, 11) + "..."
                    : playlist.name}
                </div>
                <div className='PlaylistBtns'>
                  <div className='DeletePlaylistbtn'>
                    <OpenModalButton
                      buttonText={<i class="fas fa-minus-circle"></i>}
                      modalComponent={<DeletePlaylist playlist={playlist} />}
                    />
                  </div>
                  <div className='UpdatePlaylistbtn'>
                    <OpenModalButton
                      buttonText={<i class="fas fa-pen-fancy"></i>}
                      modalComponent={<UpdatePlaylist playlist={playlist} />}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="noPlaylistsMessage">
              You haven't uploaded any playlists yet...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageProfile;
