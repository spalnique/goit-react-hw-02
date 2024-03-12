import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Description from './Description/Description';
import Notification from './Notification/Notification';
import { useEffect, useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState(() => {
    const onLoadNotes = localStorage.getItem('notes');
    if (!onLoadNotes)
      localStorage.setItem(
        'notes',
        JSON.stringify({ good: 0, neutral: 0, bad: 0 })
      );
    return JSON.parse(localStorage.getItem('notes'));
  });

  const [stats, setStats] = useState(() => {
    const onLoadStats = localStorage.getItem('stats');
    if (!onLoadStats)
      localStorage.setItem(
        'stats',
        JSON.stringify({ total: 0, positiveRate: '0%' })
      );
    return JSON.parse(localStorage.getItem('stats'));
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));

    const totalFeedback = Object.values(notes).reduce((acc, x) => acc + x, 0);
    const positiveFeedbackRate = totalFeedback
      ? Math.round(((totalFeedback - notes['bad']) / totalFeedback) * 100) + '%'
      : '0%';

    setStats({
      total: totalFeedback,
      positiveRate: positiveFeedbackRate,
    });
    localStorage.setItem(
      'stats',
      JSON.stringify({
        total: totalFeedback,
        positiveRate: positiveFeedbackRate,
      })
    );
  }, [notes]);

  return (
    <>
      <Description />
      <Options data={notes} onUpdate={setNotes} />
      {stats.total > 0 ? (
        <>
          <Feedback data={notes} stats={stats} />
          <button
            onClick={() => {
              setNotes({ good: 0, neutral: 0, bad: 0 });
              setStats({ total: 0, positiveRate: '0%' });
            }}>
            reset
          </button>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
