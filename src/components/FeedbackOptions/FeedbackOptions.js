import { FeedbackOptionsUl } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
export default function FeedbackOptions(props) {
  const { feedbacksTitle, buttonClick } = props;
  return (
    <FeedbackOptionsUl>
      {feedbacksTitle.map((feedbackTitle, index) => {
        const label =
          feedbackTitle.charAt(0).toUpperCase() + feedbackTitle.slice(1);
        return (
          <li key={index}>
            <button type="button" onClick={() => buttonClick(feedbackTitle)}>
              {label}
            </button>
          </li>
        );
      })}
    </FeedbackOptionsUl>
  );
}

FeedbackOptions.propTypes = {
  feedbacksTitle: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonClick: PropTypes.func.isRequired,
};
