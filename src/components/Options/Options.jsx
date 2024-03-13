import Button from '../Button/Button';

const Options = ({ feedbackData, totalFeedbacks, onUpdate, onReset }) => {
  return (
    <>
      <ul>
        {Object.keys(feedbackData).map((feedbackType) => {
          return (
            <li key={feedbackType}>
              <Button
                buttonName={feedbackType}
                onClick={() => {
                  onUpdate(feedbackData, feedbackType);
                }}
              />
            </li>
          );
        })}
      </ul>
      {totalFeedbacks > 0 && <Button buttonName={'reset'} onClick={onReset} />}
    </>
  );
};

export default Options;
