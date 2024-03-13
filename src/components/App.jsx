import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Description from './Description/Description';
import Notification from './Notification/Notification';
import { useEffect, useState } from 'react';

const App = () => {
  const resetFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const initFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (!initFeedback) return resetFeedback;
    return initFeedback;
  });

  const totalFeedbacks = feedback.good + feedback.neutral + feedback.bad;
  const positiveRate = Math.round(
    ((totalFeedbacks - feedback.bad) / totalFeedbacks) * 100
  );

  const handleReset = () => {
    setFeedback(resetFeedback);
  };

  const handleUpdate = (feedbackData, feedbackType) => {
    const updatedFeedback = {
      ...feedbackData,
      [feedbackType]: feedbackData[feedbackType] + 1,
    };
    setFeedback(updatedFeedback);
  };

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        feedbackData={feedback}
        onUpdate={handleUpdate}
        onReset={handleReset}
        totalFeedbacks={totalFeedbacks}
      />
      {totalFeedbacks > 0 ? (
        <Feedback
          feedbackData={feedback}
          totalFeedbacks={totalFeedbacks}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
