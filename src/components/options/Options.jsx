import { Box } from '../box/Box';

export const Options = ({ onFeedback, options }) => {
  return (
    <Box
      m={0}
      p={0}
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      as="ul"
      background="accent"
    >
      {options.map(button => (
        <li key={button}>
          <button type="button" onClick={() => onFeedback(button)}>
            {button}
          </button>
        </li>
      ))}
    </Box>
  );
};
