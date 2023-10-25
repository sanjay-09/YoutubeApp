import { createSlice } from "@reduxjs/toolkit";
const navSlice=createSlice({
    name:"navSlice",
    initialState:{
        showSideBar:true
    },
    reducers:{
        showItems:(state,action)=>{
            if(state.showSideBar==false){
                state.showSideBar=true;
            }
            else{
                state.showSideBar=false;
            }
        },
        hideItems:(state,action)=>{
            state.showSideBar=false;
        }
    }
})
export default navSlice.reducer;
export const{showItems,hideItems}=navSlice.actions;