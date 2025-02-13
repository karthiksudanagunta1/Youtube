import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state)=>{
          state.isMenuOpen=!state.isMenuOpen
         
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        }
    }
})
export const {toggleMenu,closeMenu}=Slice.actions;
export default Slice.reducer