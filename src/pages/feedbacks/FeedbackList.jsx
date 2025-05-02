import { useParams } from "react-router-dom";
import Card from "../../ui/Card"
import { setCurrentFeed } from "../../redux/feedbacksSlice";
import { useDispatch } from "react-redux";

export default function FeedbackList({data = []}) {
    const dispatch = useDispatch();
  return (
    <div className="feedback-list">
      {data.map((feed , index)=>{
        return <Card key={index}>
        <button className="close">X</button>
        <button onClick={()=>dispatch(setCurrentFeed(feed))} >Edit</button>
        <div className="num-display">{feed.rating}</div>
        <div className="text-display">{feed.text}</div>
      </Card>
      })}
      
    </div>
  );
}
