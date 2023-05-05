import { createContext, useReducer } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN': 
            return {user: action.payload}
        case 'LOGOUT':
            return {user : null}
        default :
            return state
    }
}

//children represents whatever component AuthContextProvider wraps
export const AuthContextProvider = ({children}) => {

    //we need to register the state
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    //console.log('AuthContext state; ', state)

    return (
        <AuthContext.Provider value = {{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}