import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatItem } from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
    <Box as="ul" display="flex" gridGap="24px" mt={5}>
      {options.map(item =>
        <li key={item}>
          <StatItem type='button' value={item} onClick={onLeaveFeedback}>{item}</StatItem>
        </li>)}
    </Box>
  )
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};