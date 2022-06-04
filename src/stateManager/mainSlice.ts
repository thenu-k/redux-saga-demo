import { CaseReducer, CaseReducerWithPrepare, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        count: 0
    },
    reducers: {
        setCount: (state, action)=> {
            state.count += 1
        }
    }
})

export const {setCount} = mainSlice.actions
export default mainSlice.reducer