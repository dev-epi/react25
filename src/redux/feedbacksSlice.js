import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../services/axiosInstance";

export const fetchUserFeedbacks = createAsyncThunk(
    'feedbacks/getAll',
    async (userId) => {
        try {
            let response = await axiosInstance.get(`/feedbacks/${userId}`)
            console.log('response' , response)
            return response
        } catch (err) {
            console.log(err)
        }

    })
export const createFeedback = createAsyncThunk(
    'feedbacs/create',
    async(item)=>{
       return await axiosInstance.post('/feedbacks' , item)
    }
)
const feedbacksSlice = createSlice({
    name : 'feedbacks',
    initialState : {
        items : [],
        rating : 0,
        error : '',
        status : ''
    },
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(fetchUserFeedbacks.fulfilled , (state , action)=>{
            state.items = action.payload.feedbacks
            state.rating = action.payload.rating
            state.status = 'success';
        }) 
        builder.addCase(createFeedback.fulfilled , (state , action)=>{
            state.items.push(action.payload)
        })   
    }
})
export default feedbacksSlice.reducer    