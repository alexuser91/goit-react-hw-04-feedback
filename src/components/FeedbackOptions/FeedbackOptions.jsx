import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback, iconsButton }) => {
  return (
    <div className={css.feedbackWrapper}>
      {options.map(option => (
        <button
          className={css.button}
          key={option}
          name={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          <div className={css.button_wrapper}>{option}</div>
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
  // iconsButton: Add your PropTypes validation for iconsButton if needed
};

export default FeedbackOptions;
