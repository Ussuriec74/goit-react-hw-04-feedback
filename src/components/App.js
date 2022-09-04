import { useState } from 'react';
import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
// import { type } from '@testing-library/user-event/dist/type';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const reviews = {
    good,
    neutral,
    bad,
  }

  const feedbackIncrement = evt => {
     const label = evt.currentTarget.getAttribute('value');
    switch (label) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('Invalid tape')
      }
     };
  
  
  const totalFeedback = () => {
    return Object.values(reviews).reduce((total, el) => total + el, 0);
  };

  const positivePercentage = () => {
    return parseInt((good / totalFeedback()) * 100);
  };

  const keys = Object.keys(reviews);
  
  return(
     <Box>
         <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onLeaveFeedback={feedbackIncrement} />
        </Section>
         {totalFeedback() ? (
          <Section title="Statistics">
           <Statistics
             good={good}
             neutral={neutral}
             bad={bad}
             total={totalFeedback()}
             positivePercentage={positivePercentage()}
           />
         </Section>
         ) : (
             <Notification message="No feedback yet" />
         )}
       </Box>
    );
}
