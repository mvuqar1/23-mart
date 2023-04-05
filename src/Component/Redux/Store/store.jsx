import { legacy_createStore } from "redux";
import rootReduser from "./rootReduser";




export const store = legacy_createStore(rootReduser)
