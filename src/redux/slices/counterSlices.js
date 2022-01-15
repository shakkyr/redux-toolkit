import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


//! 1- create the action

export const fetchPost = createAsyncThunk('post/list', async (payload, {rejectWithValue, getState , dispatch})=> {

        try {
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
                return data

        } catch (error) {
                console.log(error);
                return error?.response
        }
})

//! 2- slices

const postSlices = createSlice({
        name: "post",
        initialState: {},
        extraReducers: {
                //map notation
                //! handle pending state
                [fetchPost.pending] : (state, action) => {
                        state.loading = true;
                },
                //! handle fulfilled
                [fetchPost.fulfilled] : (state, action) => {
                        state.postsList = action.payload;
                        state.loading = false
                },
                //! handle rejection
                [fetchPost.rejection] : (state, action) => {
                        state.loading = false;
                        state.error = action.payload

                }
        }
})

//! exporting

export default postSlices.reducer