import { useState } from 'react';
import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
// import { type } from '@testing-library/user-event/dist/type';

export const App = () => {


  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const  { good, neutral, bad }= reviews;

  const feedbackIncrement = evt => {
     const label = evt.currentTarget.getAttribute('value');
     setReviews((prevState) => {
       return {
         ...prevState,
         [label]: prevState[label] + 1,
       }
     });
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
