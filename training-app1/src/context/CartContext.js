import { createContext, useReducer, useEffect } from 'react'

export const CartContext = createContext()

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_CARTS':
            return { cartItems: action.payload }
        case 'ADD_CART':
            return { user: null }
        case 'DELETE_CART':
            return { cartItems:state.cartItems.filter((value)=>(value._id !== action.payload.deletedItem._id)) }    
        default:
            return state
    }
}

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        cartItems:null
    })

    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem('user'))

    //     if (user) {
    //         console.log(user)
    //     }
    // }, [])

    console.log('CartContext state:', state)

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>
    )

}