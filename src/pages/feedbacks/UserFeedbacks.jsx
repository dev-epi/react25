import { useParams } from "react-router-dom";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";
import FeedbackStats from "./FeedbackStats";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserFeedbacks } from "../../redux/feedbacksSlice";

export default function UserFeedbacks() {
  const {userId} = useParams();
  const dispatch = useDispatch();
  const {items:feeds , status , rating } = useSelector((state)=>state.feedbacks)
  useEffect(()=>{
    dispatch(fetchUserFeedbacks(userId))
   
  },[dispatch , userId ])
  return (
    <div className="container">
      <FeedbackForm userId={userId}></FeedbackForm>
      <FeedbackStats rating={rating} length={feeds.length}/>
      <FeedbackList data={feeds}/>
    </div>
  )
}
