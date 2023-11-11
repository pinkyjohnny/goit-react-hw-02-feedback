import React from 'react';
import { StatisticsWrapper, StatsName } from './Statistics.styled';
import { PropTypes } from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <StatisticsWrapper>
      <ul>
        <li>
          <StatsName>Good: {good}</StatsName>
        </li>
        <li>
          <StatsName>Neutral: {neutral}</StatsName>
        </li>
        <li>
          <StatsName>Bad: {bad}</StatsName>
        </li>
        <li>
          <StatsName>Total: {total} </StatsName>
        </li>
        <li>
          <StatsName>Positive Feedback: {positiveFeedback}%</StatsName>
        </li>
      </ul>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
