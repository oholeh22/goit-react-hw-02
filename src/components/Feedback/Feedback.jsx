import style from './feedback.module.css';

export default function Feedback({
  good, neutral, bad, totalFeedback, positiveFeedback,
}) {
  return (
    <div className={style.feedback}>
      <p className={style.good}>Good: {good}</p>
      <p className={style.neutral}>Neutral: {neutral}</p>
      <p className={style.bad}>Bad: {bad}</p>
      <p className={style.total}>Total: {totalFeedback}</p>
      <p className={style.positive}>Positive: {positiveFeedback}%</p>
    </div>
  );
}