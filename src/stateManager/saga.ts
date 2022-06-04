import {call, takeEvery, put} from 'redux-saga/effects'
import { setCount } from './mainSlice'

export default function* rootSaga(){
    yield takeEvery(setCount, handleSetCount)
    //The type of a reducer in toolkit is <slicenName>/<reducerName>
}

export function* handleSetCount(){
    console.log("Inside the saga!")

    //After this point the 
}