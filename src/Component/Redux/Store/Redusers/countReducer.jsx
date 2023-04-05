import * as action_types from "../../ACTION/action_types";

const initialState = {
    count: 0,
    form:""
}

export const countReducer = (state = initialState, action) => {
    const { type,payload } = action;
    switch (type) {
        case action_types.PLUS:
            return {
                ...state,
                count: state.count + 1
            }
        case action_types.MINUS:
            return {
                ...state,
                count: state.count - 1
            }
        case action_types.RESET:
            return {
                ...state,
                count: payload
            }
        case action_types.CHANGETOTHISNUMBER:
            return {
                ...state,
                count: payload
            }
        case "change":
            return {
                ...state,
                form: payload
            }
        // case action_types.CHANGETOTHISOBJECT:
        //     return {
        //         ...state,
        //         form: payload
        //     }
        default:
            return state;
    }
}