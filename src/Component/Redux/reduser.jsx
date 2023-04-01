import * as action_types_store from "./ACTION/action_types_store";

const initialState = {
    count: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_types_store.PLUS:
            return {
                count: state.count + 1
            }
        case action_types_store.MINUS:
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}