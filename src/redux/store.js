 import { configureStore } from "@reduxjs/toolkit";
import feedbacksReducer from './feedbacksSlice'
export const store = configureStore({
    reducer : {
        feedbacks : feedbacksReducer
    }
})