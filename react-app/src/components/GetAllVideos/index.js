import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllVideosThunk } from '../../store/videos';
import { NavLink } from "react-router-dom";
import "./GetAllVideos.css"

function GetAllVideos() {
    const allVideos = useSelector(state => state.video)
    const dispatch = useDispatch()
    const allVideoArray1 = Object.values(allVideos)
    const allVideoArray = allVideoArray1.sort((a, b) => Math.random() - Math.random())



    useEffect(() => {
        dispatch(getAllVideosThunk())
    }, [dispatch])

    return (
        <div className='videoCardContainer'>
            {allVideoArray.length > 0 && allVideoArray.map(video =>
                <NavLink  className="Tiles" to={`/video/${video?.id}`}>
                    <div className='VideoCard'>
                        <div className='videoThumbNail'>
                            <img className="videoThumbNailimgforsplash" src={video?.videoImage}></img>
                        </div>
                        <div className='videoTitle'>
                            {video?.title}
                        </div>
                        <div className='videoStudio'>
                            Studio: {video?.artist}
                        </div>
                    </div>
                </NavLink>
            )}
        </div>
    )
}

export default GetAllVideos;
