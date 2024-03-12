import Counter from '../Counter/Counter';

const Feedback = ({ data, stats }) => {
  return (
    <>
      <ul>
        {Object.keys(data).map((x) => {
          return <Counter key={x} propName={x} propValue={data[x]} />;
        })}
      </ul>
      <ul>
        {Object.keys(stats).map((x) => {
          return <Counter key={x} propName={x} propValue={stats[x]} />;
        })}
      </ul>
    </>
  );
};

export default Feedback;
