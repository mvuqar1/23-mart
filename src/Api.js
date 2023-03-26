import{API_URL} from "./confiq"

const getAllApi=async ()=>{
    const response=await fetch(API_URL);
    return await response.json();
}
const getIdApi=async (apiId)=>{
    const response=await fetch(API_URL+apiId);
    return await response.json();
}
export{getAllApi,getIdApi};