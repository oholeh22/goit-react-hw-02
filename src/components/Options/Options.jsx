import css from './options.module.css';

const Options = ({ options, onLeaveFeedback, onReset }) => {
  return (
    <div>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
      <button onClick={onReset} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
};

export default Options;

