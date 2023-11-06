import{CommentContextHook} from "../../hooks/CommentContextHook"
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const DeletecommentButton = ({  commentId }) => {

    const { dispatch } = CommentContextHook()
    const deleteComments = async () => {
        const response = await axios.delete(`http://localhost:5000/deletecommentItem/${commentId}`)
        console.log("response", response.data)
        dispatch({ type: 'DELETE_COMMENT', payload: response.data })
    }
    return (
        <>
            <Button active variant="danger" onClick={() => deleteComments()}>Delete</Button>
        </>
    );
}



export default DeletecommentButton;