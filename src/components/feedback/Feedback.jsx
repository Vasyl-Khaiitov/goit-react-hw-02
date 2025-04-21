export default function Feedback({ feedback }) {
  return (
    <div>
      <ul>
        <li>Good:{feedback.good}</li>
        <li>Neutral:{feedback.neutral}</li>
        <li>Bad:{feedback.bad}</li>
      </ul>
    </div>
  );
}
