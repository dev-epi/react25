import { useState } from "react";
import Card from "../../ui/Card";

export default function FeedbackForm({userId}) {

    const [newFeedback , setFeedback]= useState({
        text : '',
        rating : 5,
        user_id : userId 
    })
    const submit = ()=>{

    }
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us ?</h2>
        <ul className="rating">
            {
                [1,2,3,4,5,6,7,8,9,10].map((nb)=>{
                    return <li key={nb}>
                    <input type="radio" id={'num'+nb}  value={nb} onChange={()=>setFeedback({...newFeedback , rating : nb})} />
                    <label htmlFor={'num'+nb}>{nb}</label>
                  </li>
                })
            }
          
          
        </ul>
        <div className="input-group">
          <input type="text" placeholder="Write a review" />
          <button type="submit" className="btn btn-secondary">
            Send
          </button>
        </div>
        <div className="message">for error messages</div>
      </form>
    </Card>
  );
}
