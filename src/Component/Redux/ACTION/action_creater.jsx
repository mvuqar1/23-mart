
import * as action_types_store  from "../../Redux/ACTION/action_types";



export const incrimentHandler=()=>{
    return{
        type:action_types_store.PLUS
    }
}
export const dicrimentHandler=()=>{
    return{
        type:action_types_store.MINUS
    }
}
export const resetHandler=()=>{
    return{
        type:action_types_store.RESET,
        payload:0
    }
}

export const toggleCounterHandler = () => {
        console.log("hjkl")
 }
