import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getSoloVideoThunk } from "../../store/videos";
import AddVideotoPlaylist from "../AddVideoToPlaylistModal";
import { useModal } from '../../context/Modal'
import OpenModalButton from "../OpenModalButton";
import "./SingleVideoPage.css";
import { getAllCommentsThunk } from "../../store/comments";
import { createCommentsThunk } from "../../store/comments";
import DeleteCommentModal from "../DeleteCommentModal/index,";
import EditCommentModal from "../EditCommentModal";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal"
import LikeForm from "./likeform";
import { getAllPlaylistforSidebarThunk } from "../../store/sidebar";
import { getAllVideosforSidebarThunk } from "../../store/sidebar";

function SingleVideoPage() {
  const params = useParams();
  const videoId = params.videoid;
  const soloVideo = useSelector(state => state.video);
  const user = useSelector(state => state.session.user)
  const allcommentsObj = useSelector(state => state.comments.allComments);
  const commentArray = allcommentsObj ? Object.values(allcommentsObj) : [];
  const dispatch = useDispatch();
  const { closeModal } = useModal()
  const pageVideo = soloVideo[Number(videoId)];
  const [comments, setComments] = useState("")
  const [activeTab, setActiveTab] = useState('playlist');
  const maxCharacters = 250
  const sidebarPlaylist = useSelector(state => state.sidebar.allPlaylists)
  const sidebarVideos = useSelector(state => state.sidebar.videos)
  const sidebarPlaylistArray1 = Object.values(sidebarPlaylist)
  const sidebarPlaylistArray = sidebarPlaylistArray1.sort((a, b) => Math.random() - Math.random())
  const sidebarVideosArray1 = Object.values(sidebarVideos)
  const sidebarVideosArray = sidebarVideosArray1.sort((a, b) => Math.random() - Math.random())
  console.log("HERE IS THE VIDEO ARRAY RANDOMIZED", sidebarVideosArray)

  const handleCommentChange = (e) => {
    const inputComments = e.target.value;
    if (inputComments.length <= maxCharacters) {
      setComments(inputComments);
    }
  };

  const remainingCharacters = maxCharacters - comments.length;

  const getCharacterCountClass = () => {
    if (remainingCharacters >= 175) {
      return 'green';
    } else if (remainingCharacters >= 100) {
      return 'yellow';
    } else if (remainingCharacters >= 50) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('user_id', user.id)
    formData.append('video_id', videoId)
    formData.append('comment', comments)

    await dispatch(createCommentsThunk(formData))
    await dispatch(getAllCommentsThunk())
    setComments("")
  }

  const handleVideoTab = async () => {
    dispatch(getAllVideosforSidebarThunk())
    setActiveTab('videos');
  };

  const handleplaylistTab = async () => {
    await dispatch(getAllPlaylistforSidebarThunk())
    setActiveTab('playlist');
  };

  useEffect(() => {
    dispatch(getSoloVideoThunk(videoId));
    dispatch(getAllCommentsThunk());
    dispatch(getAllPlaylistforSidebarThunk())
  }, [dispatch]);

  if (pageVideo === null || !pageVideo?.awsUrl) {
    return null;
  }
  return (
    <div className="singleVideoPageContainer">
      <div className="singleVideoPageFlex">
        <div key={pageVideo?.id} className="videoPlayer">
          <video width="100%" height="40%" controls>
            <source src={pageVideo?.awsUrl} type="video/mp4" />
          </video>
          <div className="videoInfo">
            <div className="undervideotext">
              <div className="videoTitlesingle">{pageVideo?.title}</div>
              <div className="likeStuff">
                <div>Likes: {pageVideo.likes.length}</div>
                <div>
                  <LikeForm video={pageVideo} />
                </div>
              </div>
            </div>
            <div className="studioAndplaylist">
              <div className="videoArtist">Made By: {pageVideo?.artist}</div>
              <div>
                <div className="AddVideotoPlaylistModal">
                  <OpenModalButton
                    buttonText="Add to a playlist"
                    onItemClick={closeModal}
                    modalComponent={<AddVideotoPlaylist video={pageVideo} />}
                  />
                </div>
              </div>
            </div>
            <div className="videoBioTitle">Description</div>
            <div className="videoBio">{pageVideo?.aboutVideo}</div>
          </div>
        </div>
        <div className="CommentsContainer">
          <div className="commentTitlediv">
            <h2 className="CommentsTitle">Comments</h2>
          </div>

          {user ? (
            <div className="boxForcommentInput">
              <div className="userNamepicforComment">
                <img className="userNamepicforCommentimage" src={user?.profileImage.length === 0 ? "https://static1.squarespace.com/static/5898e29c725e25e7132d5a5a/58aa11bc9656ca13c4524c68/58aa11e99656ca13c45253e2/1487540713345/600x400-Image-Placeholder.jpg?format=original" : user?.profileImage} />
              </div>
              <form className='createCommentForm' onSubmit={handleCommentSubmit}>
                <div className="forthefull">
                  <label>
                    <textarea
                      id="commentArea"
                      type="text"
                      name="Comment"
                      placeholder="Type Comment Here"
                      value={comments}
                      onChange={handleCommentChange}
                      className="VideoUploadbtn"
                      maxLength={maxCharacters}
                    />
                  </label>
                  <div className="characterCounter">
                    <div>
                      Remaining characters: <span className={getCharacterCountClass()}>{remainingCharacters}</span>
                    </div>
                    <div>
                      <button type="submit" className="commentButton">Comment</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="loginMessageforComments">
              <div>
                <h3 className="loginMessage">You Need To Be Logged In to Post Comments</h3>
              </div>
              <div>
                <h4>Log In or Sign Up here</h4>
              </div>
              <div className="CommentNotLoginBtn">
                <div className="loginComment">
                  <OpenModalButton
                    buttonText="Log In"
                    onItemClick={closeModal}
                    modalComponent={<LoginFormModal />}
                  />
                </div>
                <div className="loginComment">
                  <OpenModalButton
                    buttonText="Sign In"
                    onItemClick={closeModal}
                    modalComponent={<SignupFormModal />}
                  />
                </div>
              </div>

            </div>
          )}

          {commentArray && commentArray
            .filter(comment => comment.videoId === +videoId).toReversed()
            .map((comment, index) => (
              <div className="CommentContainer">
                <div className="userPicforCommentcontainer">
                  <img className="userPicforComment" src={comment?.userimage.length === 0 ? "https://static1.squarespace.com/static/5898e29c725e25e7132d5a5a/58aa11bc9656ca13c4524c68/58aa11e99656ca13c45253e2/1487540713345/600x400-Image-Placeholder.jpg?format=original" : comment?.userimage} />
                </div>
                <div className="NameAndComment">
                  <div className="ownerandTime">
                    <div className="commentOwner">
                      @{comment.user}
                    </div>
                    <div className="commentOwner">
                      uploaded at: {comment.createdAt}
                    </div>
                  </div>

                  <div className="actualcomment">
                    {comment?.comment}
                  </div>
                  {user?.id === comment.userid && (
                    <div className="btnsforDeleteAndEdit">
                      <div className="DeleteCommentModalBtn">
                        <OpenModalButton
                          buttonText="DELETE"
                          modalComponent={<DeleteCommentModal comment={comment} />}
                        />
                      </div>
                      <div className="DeleteCommentModalBtn">
                        <OpenModalButton
                          buttonText="EDIT"
                          modalComponent={<EditCommentModal comment={comment} />}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="PlaylistorVideoSidebar">
        <div className="PlaylistorVideoSidebartabs">
          <button className={activeTab === 'playlist' ? 'active' : ''} onClick={handleplaylistTab}>Playlist</button>
          <button className={activeTab === 'videos' ? 'active' : ''} onClick={handleVideoTab}>Videos</button>
        </div>
        <div className="PlaylistorVideoSidebarContent">
          {activeTab === 'playlist' && <div>{sidebarPlaylistArray && sidebarPlaylistArray.map(playlist =>
            <NavLink className="navlink" to={`/playlist/${playlist.id}`}>
              <div className="sidebarplaylistContainer">
                <div className="sidebarplaylistImgContainer">
                  <img className="sidebarplaylistImg" src={playlist.playlistImage}></img>
                </div>
                <div className="playlistsidebarInfo">
                  <div className="sidebarplaylistName">
                    {playlist.name.length > 11
                      ? playlist.name.substring(0, 11) + "..."
                      : playlist.name}
                  </div>
                  <div className="sidebarplaylistNOV">
                    Number of Videos:{playlist.video.length}
                  </div>
                  <div className="sidebarplaylistcreator">
                    Created by: {playlist.creator}
                  </div>
                </div>
              </div>

            </NavLink>
          )}</div>}
          {activeTab === 'videos' && <div>{sidebarVideosArray && sidebarVideosArray.map(video =>
            <NavLink className="navlink" to={`/video/${video.id}`}>
              <div className="sidebarplaylistContainer">
                <div className="sidebarplaylistImgContainer">
                  <img className="sidebarplaylistImg" src={video.videoImage}></img>
                </div>
                <div className="playlistsidebarInfo">
                  <div className="sidebarplaylistName">
                    {video.title.length > 15
                      ? video.title.substring(0, 15) + "..."
                      : video.title}
                  </div>
                  <div className="sidebarplaylistNOV">
                    Number of Likes:{video.likes.length}
                  </div>
                  <div className="sidebarplaylistcreator">
                    Studio: {video.artist}
                  </div>
                </div>
              </div>
            </NavLink>
          )}</div>}
        </div>
      </div>
    </div>
  );
}

export default SingleVideoPage;
