
import { useContext } from "react"
import { SubscribedContext } from "../context/SubscribedContext"

export const SubscribedContextHook=()=>{
    const context=useContext(SubscribedContext)

    if(!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
      }
      return context
}
