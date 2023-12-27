import { createSlice } from "@reduxjs/toolkit";

const initialState={
    balance:0
}

export const bankSlice=createSlice({

    name:"bank",
    initialState,
    reducers:{
        deposit:(state,action)=>{
            state.balance+=action.payload
        },
        withdraw:(state,action)=>{
            if(state.balance>= action.payload){ 
                state.balance-=action.payload;
            }
            else{
                alert("not enough balance..")
            }
        }
    }
})
export const {deposit,withdraw}=bankSlice.actions
export default bankSlice.reducer;