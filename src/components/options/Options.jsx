export const Options = ({ onFeedback, options }) => {
  return (
    <ul>
      {options.map(button => (
        <li key={button}>
          <button type="button" onClick={() => onFeedback(button)}>
            {button}
          </button>
        </li>
      ))}
    </ul>
  );
};
