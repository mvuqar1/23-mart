
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
export const resetHandler=(id)=>{
    return{
        type:action_types_store.RESET,
        payload:id
    }
}
export const changeToThisNumber=(id)=>{
    return{
        type:action_types_store.CHANGETOTHISNUMBER,
        payload:id
    }
}

export const toggleCounterHandler = () => {
        console.log("hjkl")
 }

// export const changeToThisObject=(formState)=>{
//     return{
//         type:action_types_store.CHANGETOTHISOBJECT,
//         payload:formState
//     }
// }
