import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Description from './Description/Description';
import Notification from './Notification/Notification';
import { useEffect, useState } from 'react';

// const total = Object.values(initFeedback).reduce((acc, x) => acc + x, 0);
// const rate = ((total - initFeedback.notes.bad) / total) * 100;

const App = () => {
  const resetFeedback = {
    notes: { good: 0, neutral: 0, bad: 0 },
    stats: { total: 0, rate: 0 },
  };

  const [feedback, setFeedback] = useState(() => {
    const initFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (!initFeedback) return resetFeedback;
    return initFeedback;
  });

  const handleReset = () => {
    setFeedback(resetFeedback);
  };

  const handleUpdate = (data, property) => {
    const updatedNotes = { ...data, [property]: data[property] + 1 };
    const updatedTotal = Object.values(updatedNotes).reduce(
      (acc, x) => acc + x,
      0
    );
    const updatedRate =
      Math.round(((updatedTotal - updatedNotes['bad']) / updatedTotal) * 100) +
      '%';
    const updatedStats = {
      total: updatedTotal,
      rate: updatedRate,
    };
    setFeedback({ notes: updatedNotes, stats: updatedStats });
  };

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options data={feedback.notes} onUpdate={handleUpdate} />
      {feedback.stats.total > 0 ? (
        <>
          <Feedback data={feedback} />
          <button onClick={handleReset}>reset</button>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
