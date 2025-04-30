import React, { useState } from 'react';

const LearnBudgeting = () => {
  const [tip, setTip] = useState('');

  const aiTips = [
    "Track every dollar you spend for one week.",
    "Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings.",
    "Set a weekly spending limit and stick to it.",
    "Cancel one subscription you don’t use this week.",
    "Automate a $10 savings transfer every payday."
  ];

  const getAITip = () => {
    const randomTip = aiTips[Math.floor(Math.random() * aiTips.length)];
    setTip(randomTip);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>AI Budgeting Tutor</h1>
      <p>Click below to receive a smart budgeting tip powered by AI logic:</p>
      <button onClick={getAITip}>Give me a tip</button>
      {tip && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{tip}</p>}
    </div>
  );
};

export default LearnBudgeting;
