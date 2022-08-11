import { Box } from 'components/Box';
import { StatItem } from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnsList = Object.keys(options);

  return (
    <Box as="ul" display="flex" gridGap="24px" mt={5}>
      {btnsList.map(item =>
        <li key={item}>
          <StatItem type='button' value={item} onClick={onLeaveFeedback}>{item}</StatItem>
        </li>)}
    </Box>
  )
};