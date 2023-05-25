import { useDispatch, useSelector } from "react-redux"
import "./GetSinglePlaylist.css"
import { useEffect } from "react"
import { getAllPlaylistThunk } from "../../store/playlist"
import { NavLink, useHistory, useParams } from "react-router-dom"
import OpenModalButton from "../OpenModalButton";
import RemoveVideoFromPlaylist from "../RemoveVideoFromPlaylistModal"
import { useModal } from '../../context/Modal'

function GetSinglePlaylist() {
  const user = useSelector(state=>state.session.user)
  const playlist = useSelector(state => state.playlist.allPlaylists)
  const dispatch = useDispatch()
  const params = useParams()
  const playlistID = params?.playlistid
  const singlePlaylist = playlist[playlistID]
  const allvideos = singlePlaylist?.video
  const history = useHistory()
  const { closeModal } = useModal()
  useEffect(() => {
    dispatch(getAllPlaylistThunk())
  }, [dispatch])

  return (
    <div className="PlaylistContainer">
      <div className="playlistImage">
        <img className="singleplaylistImg" src={singlePlaylist?.playlistImage} alt="Playlist" />
      </div>
      <div className="nameOfPlaylist">
        <h2>{singlePlaylist?.name}</h2>
      </div>
      <div className="creatorOfPlaylist">
        <h3>Created By: {singlePlaylist?.creator}</h3>
      </div>
      <div className="allVideosContainer">
        <table className="allVideoContainerHeaders">
          <thead>
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Studio</th>
              <th colSpan={3}>Uploaded By</th>
              {user.id === singlePlaylist?.userId && <th>Remove from Playlist</th>}
            </tr>
          </thead>
          <tbody>
            {allvideos?.map((video, index) => (
                <tr key={index} onClick={()=>history.push(`/video/${video?.id}`)}>
                  <td>{index + 1}</td>
                  <td>
                    <img className="imageTable" src={video?.videoImage} alt="Video Thumbnail" />
                  </td>
                  <td>{video?.title}</td>
                  <td>{video?.artist}</td>
                  <td colSpan={3}>{video.uploader}</td>
                  {user.id === singlePlaylist?.userId && <div className="removeFromplaylistbtn"><td className="toremovebuttoncss" onClick={(e)=>e.stopPropagation()}><OpenModalButton
                        buttonText={<i className="fa-solid fa-circle-minus" style="color: #ff0000;"></i>}
                        onItemClick={closeModal}
                        modalComponent={<RemoveVideoFromPlaylist video={video} playlistId={ playlistID} />}
                        /></td></div>}
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default GetSinglePlaylist
