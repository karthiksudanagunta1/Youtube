import { createSlice } from "@reduxjs/toolkit";
import {chatCount} from "./constants"

const LiveChat=createSlice(
    {
        name:"LiveChat",
        initialState:{
            messages:[]
        },
        reducers:{
            addLiveChat:(state,action)=>{
                state.messages.splice(chatCount,1);
                state.messages.unshift(action.payload)
            }
        }
    }
)

export const {addLiveChat}=LiveChat.actions

export default LiveChat.reducer
