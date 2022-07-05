import { Component } from 'react';
import { Box } from './box/Box';
import { Options } from './options/Options';
import { Statistics } from './statistics/Statistics';
import { Title } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const total = this.totalFeedback();
    const { good } = this.state;
    return total !== 0 ? Math.round((good * 100) / total) : 0;
  };

  render() {
    const buttonsArray = Object.keys(this.state);
    const statsArray = Object.entries(this.state);
    const total = this.totalFeedback();
    const value = this.positiveFeedback();
    return (
      <Box
        as="div"
        width="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        ml="auto"
        mr="auto"
        bg="accent"
        borderRadius="normal"
        boxShadow="4px 11px 49px 1px rgba(173,186,222,1)"
      >
        <Box as="section">
          <Title>Please leave feedback</Title>
          <Options options={buttonsArray} onFeedback={this.handleFeedback} />
        </Box>

        <Box as="section" display="flex" flexDirection="column" width="50%">
          <h2>Statistics</h2>
          {total === 0 ? (
            <h3>No feedback given</h3>
          ) : (
            <Statistics total={total} good={value} statsArray={statsArray} />
          )}
        </Box>
      </Box>
    );
  }
}
