import Counter from '../Counter/Counter';

const Feedback = ({ feedbackData, totalFeedbacks, positiveRate }) => {
  return (
    <>
      <ul>
        {Object.keys(feedbackData).map((feedbackType) => {
          return (
            <li key={feedbackType}>
              <Counter
                feedbackType={feedbackType}
                value={feedbackData[feedbackType]}
              />
            </li>
          );
        })}
      </ul>
      <ul>
        <li key={'total'}>
          <Counter feedbackType={'total'} value={totalFeedbacks} />
        </li>
        <li key={'positive'}>
          <Counter feedbackType={'positive'} value={positiveRate + '%'} />
        </li>
      </ul>
    </>
  );
};

export default Feedback;
