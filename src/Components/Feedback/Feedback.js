import React from 'react';
import Controls from '../Controls/Controls';
import Notification from '../Notification/Notification';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';

class Feedback extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    positivePercentage: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrement = option => {
    this.setState({ [option]: this.state[option] + 1 });
  };
  countTotal = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotal();
    const perc = Math.round((good / total) * 100);

    return perc;
  };

  render() {
    const options = [
      { type: 'good', color: 'green' },
      { type: 'neutral', color: 'yellow' },
      { type: 'bad', color: 'red' },
    ];
    const total = this.countTotal();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title={'Please leave feedback'}>
          <Controls options={options} handleIncrement={this.handleIncrement} />
        </Section>

        {this.countTotal() > 0 ? (
          <Section title={'Statisics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Section>
            <Notification message={'There is no feedback'} />
          </Section>
        )}
      </>
    );
  }
}

export default Feedback;
