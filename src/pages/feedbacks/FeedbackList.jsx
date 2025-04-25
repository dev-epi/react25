import { useParams } from "react-router-dom";
import Card from "../../ui/Card"

export default function FeedbackList() {
    
  return (
    <div className="feedback-list">
      <Card>
        <button className="close">X</button>
        <div className="num-display">9</div>
        <div className="text-display">Awesome</div>
      </Card>
    </div>
  );
}
