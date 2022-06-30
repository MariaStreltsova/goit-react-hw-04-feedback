import { Box } from '../box/Box';

export const Statistics = ({ statsArray, good, total }) => {
  return (
    <Box display="inline-flex" alightItems="start" flexDirection="column">
      <ul>
        {statsArray.map(item => (
          <li key={item[0]}>
            <p>
              {item[0]}: {item[1]}
            </p>
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
      <p value={good}> Positive Feedback: {good}%</p>
    </Box>
  );
};
