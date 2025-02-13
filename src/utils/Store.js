import { configureStore } from '@reduxjs/toolkit';
import sliceReducer from "./Slice"
import suggestionReducer from './suggestionSlice';
import LiveChatReducer from "./LiveChat"
const Store=configureStore({
   reducer:{
    app:sliceReducer,
    search:suggestionReducer,
    LiveChat:LiveChatReducer
   }
})

export default Store;