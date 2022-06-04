import {configureStore} from '@reduxjs/toolkit'
import count from './mainSlice'

export default configureStore({
    reducer: {
        count: count
    }
})