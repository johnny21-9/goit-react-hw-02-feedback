import React from 'react';
import Controls from './Controls';
import Notification from './Notification';
import Statistics from './Statistics';
import Section from './Section';

class Feedback extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
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
    if (total === 0) {
      return 0;
    } else {
      return perc;
    }
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <Controls
            options={['good', 'neutral', 'bad']}
            handleIncrement={this.handleIncrement}
          />
        </Section>

        {this.countTotal() > 0 ? (
          <Section title={'Statisics'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotal()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
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
