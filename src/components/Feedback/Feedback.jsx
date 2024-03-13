import Counter from '../Counter/Counter';

const Feedback = ({ data }) => {
  return (
    <>
      <ul>
        {Object.keys(data.notes).map((x) => {
          return <Counter key={x} propName={x} propValue={data.notes[x]} />;
        })}
      </ul>
      <ul>
        {Object.keys(data.stats).map((x) => {
          return <Counter key={x} propName={x} propValue={data.stats[x]} />;
        })}
      </ul>
    </>
  );
};

export default Feedback;
