import style from './options.module.css';

const Options = ({ options, onLeaveFeedback, onReset, feedbackCount }) => {
  return (
    <div>
      {options.map(option => (
        <button className={style.btn} key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
      {feedbackCount > 0 && (
        <button className={style.btn} onClick={onReset} style={{ marginLeft: '10px' }}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;

