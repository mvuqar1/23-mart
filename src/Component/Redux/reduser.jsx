import * as action_types_store from "./ACTION/action_types_store";

const initialState = {
    count: 0,
}

export const counterReducer = (state = initialState, action) => {
    const { type,payload } = action;    //const { type, payload } = action        payload: {name, id}
    switch (type) {
        case action_types_store.PLUS:
            return {
                count: state.count + 1
            }
        case action_types_store.MINUS:
            return {
                count: state.count - 1
            }
        case action_types_store.RESET:
            return {
                count: payload
            }
        default:
            return state;
    }
}