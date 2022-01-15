import {configureStore} from '@reduxjs/toolkit'
// import { counterSlices } from '../slices/counterSlices';//firstmethid
// import counterReducer from '../slices/counterSlices'//second method
import postReducer from '../slices/counterSlices'





const store = configureStore({
    reducer : {
        // counter : counterSlices,
        // counter : counterReducer,
        post : postReducer,
    }
})

export default store;