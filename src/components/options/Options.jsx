import { Box } from '../box/Box';
import { Buttons } from './Options.styled';

export const Feedback = ({ onFeedback, options }) => {
  return (
    <Box
      m={0}
      p={0}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      as="div"
      background="accent"
    >
      {options.map(option => (
        <Buttons key={option} type="button" onClick={onFeedback}>
          {option}
        </Buttons>
      ))}
    </Box>
  );
};
