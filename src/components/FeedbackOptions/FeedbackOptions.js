import PropTypes from 'prop-types';
export default function FeedbackOptions(props) {
  const { totalsKeys, handleClickButton } = props;
  return (
    <ul>
      {totalsKeys.map((totalKey, index) => {
        const label = totalKey.charAt(0).toUpperCase() + totalKey.slice(1);
        return (
          <li key={index}>
            <button type="button" onClick={() => handleClickButton(totalKey)}>
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};
