import css from './Feedback.module.css';

export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div>
      <ul className={css.feedback_list}>
        <li className={css.feedback_item}>Good:{feedback.good}</li>
        <li className={css.feedback_item}>Neutral:{feedback.neutral}</li>
        <li className={css.feedback_item}>Bad:{feedback.bad}</li>
        <li className={css.feedback_item}>Total:{totalFeedback}</li>
        <li className={css.feedback_item}>Positive:{positiveFeedback}%</li>
      </ul>
    </div>
  );
}
