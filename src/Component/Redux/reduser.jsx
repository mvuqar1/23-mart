import * as action_types_store from "./ACTION/action_types";

const initialState = {
    count: 0,
    setup:"setup"
}
export const counterReducer = (state = initialState, action) => {
    const { type,payload } = action;
    switch (type) {
        case action_types_store.PLUS:
            return {
                ...state,
                count: state.count + 1
            }
        case action_types_store.MINUS:
            return {
                ...state,
                count: state.count - 1
            }
        case action_types_store.RESET:
            return {
                ...state,
                count: payload
            }
        default:
            return state;
    }
}