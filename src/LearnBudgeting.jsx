import React, { useState } from 'react';

const LearnBudgeting = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question }),
      });

      const data = await res.json();
      setResponse(data.answer);
    } catch (err) {
      console.error(err);
      setResponse('Sorry, something went wrong with the AI.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>AI Tutor</h1>
      <p>Ask me anything:</p>
      <input
        type="text"
        placeholder="e.g. What are taxes?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <button
        onClick={askAI}
        disabled={loading}
        style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}
      >
        {loading ? 'Thinking...' : 'Ask AI'}
      </button>

      {response && (
        <div style={{ marginTop: '20px', background: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
          <strong>AI says:</strong>
          <p>{response}</p>
        </div>
      )}

      <hr style={{ margin: '3rem 0' }} />

      <h2>📚 Learn More</h2>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div style={cardStyle}>
          <h3>Budgeting Basics</h3>
          <p>Understand how to track expenses, set goals, and stick to a monthly budget.</p>
        </div>
        <div style={cardStyle}>
          <h3>Understanding Taxes</h3>
          <p>Learn how income, sales, and property taxes affect your finances and how to plan around them.</p>
        </div>
        <div style={cardStyle}>
          <h3>Smart Saving Tips</h3>
          <p>Discover practical ways to save for emergencies, retirement, and long-term goals.</p>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h3>Helpful Resources</h3>
        <ul>
          <li><a href="https://www.investopedia.com/personal-finance-4427765" target="_blank" rel="noreferrer">Investopedia – Personal Finance</a></li>
          <li><a href="https://www.irs.gov/" target="_blank" rel="noreferrer">IRS.gov – Official Tax Information</a></li>
          <li><a href="https://www.consumerfinance.gov/" target="_blank" rel="noreferrer">Consumer Finance Protection Bureau</a></li>
        </ul>
      </div>
    </div>
  );
};

const cardStyle = {
  flex: '1 1 300px',
  background: '#ffffff',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

export default LearnBudgeting;

