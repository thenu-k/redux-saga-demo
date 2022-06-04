import {configureStore} from '@reduxjs/toolkit'
import count from './mainSlice'
import createSagaMiddleware from "@redux-saga/core";
import saga from './saga'

//redux saga 
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default configureStore({
    reducer: {
        count: count
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})

sagaMiddleware.run(saga)