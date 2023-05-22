import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSoloVideoThunk } from "../../store/videos";
import "./SingleVideoPage.css";

function SingleVideoPage() {
  const params = useParams();
  const videoId = params.videoid;
  const soloVideo = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const pageVideo = soloVideo[Number(videoId)];

  useEffect(() => {
    dispatch(getSoloVideoThunk(videoId));
  }, [dispatch]);

  if (pageVideo === null || !pageVideo?.awsUrl) {
    return null;
  }

  return (
    <div className="singleVideoPageContainer">
      <div className="videoPlayer">
        <video width="70%" height="40%" controls>
          <source src={pageVideo?.awsUrl} type="video/mp4" />
        </video>
        <div className="videoInfo">
          <div className="videoTitlesingle">{pageVideo?.title}</div>
          <div className="videoArtist">Made By: {pageVideo?.artist}</div>
          <div className="videoBioTitle">Description</div>
          <div className="videoBio">{pageVideo?.aboutVideo}</div>
        </div>
      </div>
    </div>
  );
}

export default SingleVideoPage;
