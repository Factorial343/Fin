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
      setResponse(data.reply);
    } catch (err) {
      console.error(err);
      setResponse('Sorry, something went wrong with the AI.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>AI Budgeting Tutor</h1>
      <p>Ask me anything about budgeting or saving money:</p>
      <input
        type="text"
        placeholder="e.g. How do I budget $500/month?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <button
        onClick={askAI}
        disabled={loading}
        style={{ marginTop: '10px', padding: '10px', fontSize: '16px' }}
      >
        {loading ? 'Thinking...' : 'Ask AI'}
      </button>

      {response && (
        <div style={{ marginTop: '20px', background: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
          <strong>AI says:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default LearnBudgeting;
