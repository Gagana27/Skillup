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
         case 'EDIT_COMMENT':
            const commentIdToEdit = action.payload.commentId;
            const editedContent = action.payload.newContent;

            const updatedComments = state.Comments.map((comment) => {
                if (comment._id === commentIdToEdit) {
                    // Create a new comment object with the updated content
                    return {
                        ...comment,
                        content: editedContent,
                    };
                }
                return comment;
            });

            return { Comments: updatedComments };        
            
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