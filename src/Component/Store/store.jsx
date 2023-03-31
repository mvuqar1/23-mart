import { legacy_createStore } from "redux";

export const ACTION_TYPES_STORE={
    PLUS:"incriment",
    MINUS:"decriment",
    
}

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === ACTION_TYPES_STORE.PLUS) {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === ACTION_TYPES_STORE.MINUS) {
        return {
            counter: state.counter - 1
        }
    }
    return state
}

 const store = legacy_createStore(counterReducer)
 export default store
