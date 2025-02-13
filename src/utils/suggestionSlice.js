import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice=createSlice({
    name:"SuggestionSlice",
    initialState:{
      suggestions:{}
    },
    reducers:{
        Addsuggestion:(state,action)=>{
          state.suggestions={...action.payload,...state.suggestions};
        }
    }
})

export const {Addsuggestion}=suggestionSlice.actions;
export default suggestionSlice.reducer;