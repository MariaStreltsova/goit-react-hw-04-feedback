import { Component } from 'react';
import { Box } from './box/Box';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleFeedback = value => {
  //   const feedback = value.currentTarget.dataset.feedback;
  //   console.log(feedback);
  //   // this.setState(prevState => {
  //   //   return { [value]: prevState[value] + 1 };
  //   // });
  // };

  render() {
    return (
      <Box
        as="section"
        width="100%"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
      >
        <h1>Please leave feedback</h1>
      </Box>
    );
  }
}
