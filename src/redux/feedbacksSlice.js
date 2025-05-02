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
        console.log(item)
       return await axiosInstance.post('/create-feedbacks' , item)
    }
)
const feedbacksSlice = createSlice({
    name : 'feedbacks',
    initialState : {
        items : [],
        rating : 0,
        error : '',
        status : '',
        current : null
    },
    reducers : {
        setCurrentFeed : (state , action)=>{
            state.current = action.payload
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchUserFeedbacks.fulfilled , (state , action)=>{
            state.items = action.payload.feedbacks
            state.rating = action.payload.rating
            state.status = 'success';
        }) 
        .addCase(fetchUserFeedbacks.pending , (state)=>{
            state.status = 'pending'
        })


        builder.addCase(createFeedback.fulfilled , (state , action)=>{
            // si l'api retourn le feedback ajouté
            console.log('test')
            state.items.push(action.payload)
        })  

    }
})

export const {setCurrentFeed} = feedbacksSlice.actions
export default feedbacksSlice.reducer    