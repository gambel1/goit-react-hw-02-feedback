import PropTypes from 'prop-types';

export default function Statictics(props) {
  const { good, neutral, bad, total, positiveFeedback } = props;
  return (
    <ul>
      <li>
        <span>Good</span>
        <span>{good}</span>
      </li>
      <li>
        <span>Neutral</span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>Bad</span>
        <span>{bad}</span>
      </li>
      <li>
        <span>Total</span>
        <span>{total}</span>
      </li>
      <li>
        <span>Positive Feedback</span>
        <span>{positiveFeedback}</span>
      </li>
    </ul>
  );
}

Statictics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
