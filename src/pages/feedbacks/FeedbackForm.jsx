import { useEffect, useState } from "react";
import Card from "../../ui/Card";
import { useDispatch, useSelector } from "react-redux";
import { createFeedback } from "../../redux/feedbacksSlice";

export default function FeedbackForm({userId}) {

  const {current} = useSelector((state)=>state.feedbacks)
  const dispatch = useDispatch();
    const [newFeedback , setFeedback]= useState({
        text : '',
        rating : 5,
        user_id : userId 
    })
    const submit = (e)=>{
      e.preventDefault();
      dispatch(createFeedback(newFeedback))
      setFeedback({text : '',
        rating : 5,
        user_id : userId })
    }
    useEffect(()=>{
      if(current){
        setFeedback(current)
      }
    }, [current])
  return (
    <Card>
      <form onSubmit={submit}>
        <h2>How would you rate your service with us ?</h2>
        <ul className="rating">
            {
                [1,2,3,4,5,6,7,8,9,10].map((nb)=>{
                    return <li key={nb}>
                    <input type="radio" id={'num'+nb} checked={newFeedback.rating === nb}  value={nb} onChange={()=>setFeedback({...newFeedback , rating : nb})} />
                    <label htmlFor={'num'+nb}>{nb}</label>
                  </li>
                })
            }
          
          
        </ul>
        <div className="input-group">
          <input type="text" placeholder="Write a review" value={newFeedback.text} onChange={(e)=>setFeedback({...newFeedback , text : e.target.value})} />
          <button type="submit" className="btn btn-secondary">
            Send
          </button>
        </div>
        <div className="message">for error messages</div>
      </form>
    </Card>
  );
}
