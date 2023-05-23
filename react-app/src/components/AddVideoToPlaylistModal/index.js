import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { useEffect, useState } from "react";
import { addVideoToPlaylistThunk } from "../../store/playlist";
import { useHistory } from "react-router-dom";
import { getUserByIdThunk } from "../../store/session";
import "./AddVideoToPlaylist.css"

function AddVideotoPlaylist({ video }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const [checked, setChecked] = useState([]);
    const history = useHistory();

    const { closeModal } = useModal();

    function isVideoInPlaylist(playlist, video) {
        for (let currentVideo of playlist.video) {
            if (+currentVideo.id === +video.id) return false;
        }
        return true;
    }
    const handleCheckBox = (e) => {
        if (e.target.checked) {
            setChecked([...checked, e.target.value]);
        } else {
            setChecked(checked.filter((video) => video !== e.target.value));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let playlist_ids = checked.join(",");
        let video_id = video.id;

        dispatch(addVideoToPlaylistThunk(playlist_ids, video_id));
        closeModal();
    };

    useEffect(() => {
        dispatch(getUserByIdThunk(user.id));
    }, [dispatch]);

    const allPlaylistsContainVideo = user?.playlists.every((playlist) =>
        !isVideoInPlaylist(playlist, video)
    );


    return (
        <div className="add-to-playlist-modal">
            <form onSubmit={handleSubmit} method="PUT">
                {user?.playlists?.length === 0 ? (
                    <h1 className="titleforAdd">You Don't Have Any Playlists</h1>
                ) : allPlaylistsContainVideo ? (
                    <h1 className="titleforAdd">All Your Playlists Already Have This Video</h1>
                ) : (
                    <>
                    <h1 className="titleforAdd">Add {video.title} to one of your playlists:</h1>
                        {user.playlists.map((playlist) =>
                            isVideoInPlaylist(playlist, video) && (
                                <div id="add-to-playlist-input-and-label" key={playlist.id}>
                                    <label className="select_playlist">{playlist.name}</label>
                                    <input
                                        id="playlist-checkbox"
                                        type="checkbox"
                                        value={playlist.id}
                                        onChange={handleCheckBox}
                                    />
                                </div>
                            )
                        )}

                        <button className="SubmitAddtoPlaylist" type="submit">
                            Submit
                        </button>
                    </>
                )}
            </form>
        </div>
    );
}

export default AddVideotoPlaylist;
