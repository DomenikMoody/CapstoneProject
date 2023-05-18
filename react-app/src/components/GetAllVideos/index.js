import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllVideosThunk } from '../../store/videos';
import { NavLink } from "react-router-dom";
import "./GetAllVideos.css"

function GetAllVideos() {
    const allVideos = useSelector(state => state.video)
    const dispatch = useDispatch()
    const allVideoArray = Object.values(allVideos)


    useEffect(() => {
        dispatch(getAllVideosThunk())
    }, [dispatch])

    return (
        <div className='videoCardContainer'>
            {allVideoArray.length > 0 && allVideoArray.map(video =>
                <NavLink to={`/video/${video?.id}`}>
                    <div className='VideoCard'>
                        <div className='videoThumbNail'>
                            <img src={video?.videoImage}></img>
                        </div>
                        {video?.title}
                        <div>
                            <NavLink to={`/user/}`}>
                                <p>Uploaded by:{video?.uploader}</p>
                            </NavLink>

                        </div>
                    </div>
                </NavLink>
            )}

        </div>
    )
}

export default GetAllVideos;