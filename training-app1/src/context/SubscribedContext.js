import { createContext, useReducer, useEffect } from 'react'

export const SubscribedContext = createContext();

export const subscriptionReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_SUBSCRIBED_VIDEOS':
            return { subScribedItems: action.payload }
        case 'ADD_SUBSCRIBED_VIDEOS':
            return { subScribedItems: null }
        default:
            return state
    }
}

export const SubscribedContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(subscriptionReducer, {
        subScribedItems:null
    })

    console.log('SubscribedContext state:', state)

    return (
        <SubscribedContext.Provider value={{ ...state, dispatch }}>
            {children}
        </SubscribedContext.Provider>
    )

}