import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { CartContextHook } from "../../hooks/CartContextHook"

const DeleteButton = ({ userId, cartId }) => {

    const { dispatch } = CartContextHook()
    const deleteCart = async () => {
        const response = await axios.delete(`http://localhost:5000/deleteCartItem/${userId}/${cartId}`)
        console.log("response", response.data)
        dispatch({ type: 'DELETE_CART', payload: response.data })
    }
    return (
        <>
            <Button active variant="danger" onClick={() => deleteCart()}>Delete</Button>
        </>
    );
}

export default DeleteButton;