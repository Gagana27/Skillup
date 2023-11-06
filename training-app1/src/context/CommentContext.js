import { createContext, useReducer, useEffect } from 'react'

export const CommentContext = createContext()

export const commentReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_COMMENTS':
            return { Comments: action.payload }
        case 'ADD_COMMENT':
            return { Comments:[action.payload,...state.Comments] }
        case 'DELETE_COMMENT':
            return { Comments:state.Comments.filter((value)=>(value._id !== action.payload.deletedItem._id)) }
               
            
            default:
            return state
    }
}

export const CommentContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(commentReducer, {
        Comments:null
    })


    console.log('CommentContext state:', state)

    return (
        <CommentContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CommentContext.Provider>
    )

}