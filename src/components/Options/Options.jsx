import Button from '../Button/Button';

const Options = ({ data, onUpdate }) => {
  return (
    <ul>
      {Object.keys(data).map((x) => {
        return (
          <li key={x}>
            <Button
              buttonName={x}
              onClick={() => {
                onUpdate({ ...data, [x]: data[x] + 1 });
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Options;
