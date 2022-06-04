import { CaseReducer, CaseReducerWithPrepare, createSlice, PayloadAction } from "@reduxjs/toolkit";

//types
export interface InterfaceReduxState {
    count: number
}

export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        count: 0
    } as InterfaceReduxState,
    reducers: {
        setCount: (state, action)=> {
            state.count += 1
        }
    }
})

export const {setCount} = mainSlice.actions
export default mainSlice.reducer