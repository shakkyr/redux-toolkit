import {configureStore} from '@reduxjs/toolkit'
// import { counterSlices } from '../slices/counterSlices';//firstmethid
import counterReducer from '../slices/counterSlices'//second method



const store = configureStore({
    reducer : {
        // counter : counterSlices,
        counter : counterReducer,
    }
})

export default store;