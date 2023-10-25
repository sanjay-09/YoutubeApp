import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE } from "../utiities/constant";

const chatSlice=createSlice({
    name:"chatSlice",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(OFFSET_LIVE,1);
            state.messages.unshift(action.payload)
        }

    }
})
export default chatSlice.reducer;
export const {addMessage}=chatSlice.actions;