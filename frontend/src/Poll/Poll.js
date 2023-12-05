import React, { useState } from 'react';
import './Poll.css';

const Poll = ({ question, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleVote = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <div className="poll-container">
      <div className="question">
        {question}
      </div>
      <div>
      <p className="make-choice">Make a choice:</p>
      </div>
      <ul className="options-list">
        {options.map((option) => (
          <li
            key={option.id}
            className={`option ${selectedOption === option.id ? 'selected' : ''}`}
            onClick={() => handleVote(option.id)}
          >
            <span className={`bullet ${selectedOption === option.id ? 'filled' : ''}`}>&#8226;</span>
            <span className="option-text">{option.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Poll;
