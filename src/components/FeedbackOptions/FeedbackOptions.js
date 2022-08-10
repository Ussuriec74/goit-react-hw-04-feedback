import { Box } from 'components/Box';
import { StatItem } from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ handleGood, handleNeutral, handleBad }) => (
  <Box display="flex" gridGap="24px" mt={5}>
    <StatItem onClick={handleGood}>Good</StatItem>
    <StatItem onClick={handleNeutral}>Neutral</StatItem>
    <StatItem onClick={handleBad}>Bad</StatItem>
  </Box>
);