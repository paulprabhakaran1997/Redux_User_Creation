import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList : [
        { id  : 1 , name : "Paul" }
    ]
}

const userReducer = createSlice({
    name : 'userReducer',
    initialState,
    reducers : {
        addUser : ( state , {  type , payload} ) =>{
            return {
                ...state,
                userList : [...state.userList , payload]
            }
        }
    }
});

export const { addUser } = userReducer.actions;
export default userReducer.reducer