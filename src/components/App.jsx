import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Section from './Section';
import Notification from './Notification/Notification';
import Statictics from './Statictics/Statictics';
import PropTypes from 'prop-types';
import React from 'react';

export default class App extends React.Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const totalsFeedback = Object.values(this.state);
    return totalsFeedback.reduce(
      (acc, totalFeedback) => acc + totalFeedback,
      0
    );
  };

  countPositiveFeedbackPercentage = (x, y) => {
    const percentage = Math.round((x / y) * 100);
    return percentage;
  };

  handleClickButton = () => {
    this.setState(prevState => {
      return {
        state: prevState.state + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbackStat = this.countTotalFeedback();
    const percentagePositive = this.countPositiveFeedbackPercentage(
      totalFeedbackStat,
      good
    );
    const totalsKeys = Object.keys(this.state);

    return (
      <div>
        <div title="Please leave feedback">
          <FeedbackOptions
            feedbackTitle={totalsKeys}
            buttonClick={this.handleClickButton}
          />
        </div>

        <div title="Statictics">
          {!totalFeedbackStat ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbackStat}
              positiveFeedback={percentagePositive}
            />
          )}
        </div>
      </div>
    );
  }
}