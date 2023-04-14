import {
  FeedbackOptionsUl,
  FeedbackOptionsBtn,
} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
export default function FeedbackOptions(props) {
  const { options, buttonClick } = props;
  return (
    <FeedbackOptionsUl>
      {options.map((option, index) => {
        const label = option.charAt(0).toUpperCase() + option.slice(1);
        return (
          <li key={index}>
            <FeedbackOptionsBtn type="button" onClick={() => buttonClick(option)}>
              {label}
            </FeedbackOptionsBtn>
          </li>
        );
      })}
    </FeedbackOptionsUl>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonClick: PropTypes.func.isRequired,
};
