
import {useModal} from '../../context/Modal'
import { useDispatch } from "react-redux"
import { removeVideoThunk } from "../../store/videos"

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
        <>
        <h3>{`ARE YOU SURE YOU WANT TO REMOVE ${video?.title}?`}</h3>
            <button className="modalbtn" onClick={handleDelete}>Delete Song</button>
            <button className="modalbtn" onClick={() => closeModal()}>Cancel</button>
        </>
    )
}
export default DeleteModal
