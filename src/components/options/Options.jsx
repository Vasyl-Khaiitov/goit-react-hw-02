import css from './Options.module.css';

export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div className={css.div_box_button}>
      <button
        className={css.btn_good}
        type="button"
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        className={css.btn_neutral}
        type="button"
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={css.btn_bad}
        type="button"
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn_reset} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
