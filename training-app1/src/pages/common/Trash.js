import axios from 'axios';
import Button from 'react-bootstrap/Button';

const DeleteButton = ({userId,cartId}) => {
const deleteCart=async ()=>{
    const response=await axios.delete(`http://localhost:5000/deleteCartItem/${userId}/${cartId}`)
    console.log("response",response)
}
    return (
        <>
            <Button active variant="danger" onClick={()=>deleteCart()}>Delete</Button>
        </>
    );
}

export default DeleteButton;