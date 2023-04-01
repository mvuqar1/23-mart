import { legacy_createStore } from "redux";
import { counterReducer } from "../reduser";



export const store = legacy_createStore(counterReducer)
