import { createSlice } from "@reduxjs/toolkit";
const ThemeSlice = createSlice({
    name:"theme",
    initialState:{
        theme:"light"
    },
    reducers:{
        themeSwitch:(state,action)=>{
          if(state.theme=="light"){
            state.theme = "dark"
          }else if(state.theme=="dark"){
            state.theme = "light";
          }
        }
    }
})

export const {themeSwitch} = ThemeSlice.actions;
export default ThemeSlice.reducer;
