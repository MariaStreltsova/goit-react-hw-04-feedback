import { Component } from 'react';
import { Box } from './box/Box';
import { Options } from './options/Options';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = value => {
    // const feedback = value.currentTarget.dataset.feedback;
    // console.log(feedback);
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  render() {
    const buttonsArray = Object.keys(this.state);
    return (
      <Box
        as="section"
        width="100%"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <h1>Please leave feedback</h1>
        <Options options={buttonsArray} onFeedback={this.handleFeedback} />
      </Box>
    );
  }
}
