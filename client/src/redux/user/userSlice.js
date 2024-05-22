import { createSlice} from "@reduxjs/toolkit";


const initialState = {
    currentUser:null,
    error:null,
    loading:false
}
const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        SignInStart:(state)=>{
            state.loading=true,
            state.error=null
        },
        SignInSuccess: (state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
    },
    SignInFailure: (state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    updateStart:(state)=>{
        state.loading = true;
        state.error =null;
    },
    updateSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      },
      updateFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      deleteUserStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      deleteUserSuccess: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
      },
      deleteUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
        },    
});

export const {SignInStart,SignInSuccess,SignInFailure,updateStart,updateSuccess,updateFailure,deleteUserStart,deleteUserSuccess,deleteUserFailure}=userSlice.actions;

export default userSlice.reducer;