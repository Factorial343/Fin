import React from 'react';
import { useNavigate } from 'react-router-dom';

const BudgetDropdown = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.value === 'ai-budget') {
      navigate('/learn-budgeting');
    }
  };

  return (
    <div className="dropdown-wrapper">
      <select className="dropdown-select" onChange={handleChange}>
        <option value="">Select an Option</option>
        <option value="ai-budget">Learn Budgeting with AI</option>
      </select>
    </div>
  );
};

export default BudgetDropdown;
