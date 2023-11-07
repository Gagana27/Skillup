import { CommentContextHook } from "../../hooks/CommentContextHook"
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import DeleteIcon from '../../assets/deleteicon.svg';


const DeletecommentButton = ({ commentId }) => {

    const { dispatch } = CommentContextHook()
    const deleteComments = async () => {
        const response = await axios.delete(`http://localhost:5000/deletecommentItem/${commentId}`)
        console.log("response", response.data)
        dispatch({ type: 'DELETE_COMMENT', payload: response.data })
    }
    return (
        <>
            <button className="delete-button" onClick={() => deleteComments()}>
                <img src={DeleteIcon} alt="Delete Icon" width="30" height="5"/>
            </button>        </>
    );
}



export default DeletecommentButton;