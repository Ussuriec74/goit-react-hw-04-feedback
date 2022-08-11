import { Component } from 'react';
import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackIncrement = evt => {
    const label = evt.currentTarget.getAttribute('value');
    this.setState((prevState) => {
      return {
        [label]: prevState[label] + 1,
      }
    });
  };

  totalFeedback = () => {
    return Object.values(this.state).reduce((total, el) => total + el, 0);
  };

  positivePercentage = () => {
    return parseInt((this.state.good / this.totalFeedback()) * 100);
  };

  render() {
    const state = this.state;
    return(
      <Box>
        <Section title="Please leave feedback">
          <FeedbackOptions options={state} onLeaveFeedback={this.feedbackIncrement} />
        </Section>
        {this.totalFeedback() ? (
          <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalFeedback()}
            positivePercentage={this.positivePercentage()}
          />
        </Section>
        ) : (
            <Notification message="No feedback yet" />
        )}
      </Box>
    );
  }
}
