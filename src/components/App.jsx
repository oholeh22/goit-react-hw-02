import './App.css';
import { useState, useEffect } from 'react';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

function App() {
  const reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return savedFeedback || reviews;
  });

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback > 0 
    ? Math.round((feedback.good / totalFeedback) * 100) 
    : 0;

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback(reviews);
  };

  return (
    <>
      <Description />
      <Options 
        options={['good', 'neutral', 'bad']} 
        onLeaveFeedback={updateFeedback} 
        onReset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;



