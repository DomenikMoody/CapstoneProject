import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllVideosThunk } from '../../store/videos';
import OpenModalButton from '../OpenModalButton';
import CreateVideoForm from '../CreateVideoForm';
import './ManageProfile.css';
import DeleteModal from '../DeleteVideoModal';
import EditVideoModal from '../EditVideoModal';

function ManageProfile() {
  const user = useSelector(state => state.session.user);
  const allvideos = useSelector(state => state.video);
  const allvideosArray = Object.values(allvideos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideosThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Manage Your Profile</h1>
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
    </div>
  );
}

export default ManageProfile;
