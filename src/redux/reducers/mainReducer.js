import { combineReducers } from "redux";
import userReducer from "./userReducer";

export const mainReducer = combineReducers({
    userReducer : userReducer
})