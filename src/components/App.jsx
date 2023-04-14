import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statictics from './Statictics/Statictics';
import PropTypes from 'prop-types';
import React from 'react';

export default class App extends React.Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const feedbacksNum = Object.values(this.state);
    return feedbacksNum.reduce((acc, feedbackNum) => acc + feedbackNum, 0);
  };

  countPositiveFeedbackPercentage = (x, y) => {
    const percentage = Math.round((y / x) * 100);
    return percentage;
  };

  handleClickButton = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbackStat = this.countTotalFeedback();
    const percentagePositive = this.countPositiveFeedbackPercentage(
      totalFeedbackStat,
      good
    );
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            buttonClick={this.handleClickButton}
          />
        </Section>

        <Section title="Statictics">
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
        </Section>
      </div>
    );
  }
}
