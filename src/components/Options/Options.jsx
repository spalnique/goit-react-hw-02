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
                onUpdate(data, x);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Options;
