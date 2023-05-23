
import {useModal} from '../../context/Modal'
import { useDispatch } from "react-redux"
import { removeVideoThunk } from "../../store/videos"
import "./DeleteVideoModal.css"

function DeleteModal({video}) {
    const dispatch = useDispatch()
    const {closeModal} = useModal()
    console.log(video)
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(removeVideoThunk(video?.id))
        closeModal()
    }
    return (
        <div className='deletevideoModal'>
            <div>
                <h3>{`ARE YOU SURE YOU WANT TO REMOVE ${video?.title}?`}</h3>
            </div>
            <div className='deleteandcancelBtn'>
                <div className='deletevidobtn'>
                    <button className="modalbtn" onClick={handleDelete}>Delete Video</button>
                </div>
                <div className='cancelbtndelte'>
                     <button className="modalbtn" onClick={() => closeModal()}>Cancel</button>
                </div>
            </div>

        </div>
    )
}
export default DeleteModal
