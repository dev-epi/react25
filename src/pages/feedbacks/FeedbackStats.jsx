export default function FeedbackStats({rating = 0 , length = 0}) {
  return (
    <div className="feedback-stats">
      <h4>{length} Reviews</h4>
      <h4>Average Rating : {rating}</h4>
    </div>
  );
}
