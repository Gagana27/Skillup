import { CommentContext } from "../context/CommentContext"
import { useContext } from "react"

export const CartContextHook=()=>{
    const context=useContext(CommentContext)

    if(!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
      }
      return context
}
