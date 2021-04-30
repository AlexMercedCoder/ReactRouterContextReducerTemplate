import {createContext, useReducer, useContext} from "react"

// Create a context
const AppContext = createContext(null)

// custom component to provide state via use reducer

export const AppState = (props) => {

    //initial state
    const initialState = {
        count:0
    }

    // define our reducer
    const reducer = (currentState, action) => {
        // retreive type and payload
        const {type, payload} = action
        // make a copy of the state
        const newState = {...currentState}

        switch(type){

            case "add":
                newState.count = newState.count + payload
                return newState

            case "subtract":
                newState.count = newState.count + payload
                return newState

            default:
                return currentState
        }
    }

    // we create the state and dispatch
    const [state, dispatch] = useReducer(reducer, initialState)

    // create update function to make it easier to use dispatch
    const update = (type, payload) => {
        dispatch({type, payload})
    }

    return <AppContext.Provider value={{state, update}}>
        {props.children}
    </AppContext.Provider>
}

// custom hook, to get the context
export const useAppState = () => {
    return useContext(AppContext)
}