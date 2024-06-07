import React, { useState } from 'react';
import axios from 'axios';

const SubmitIssuePage = () => {
  const [issue, setIssue] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/submit-issue', { issue, category });
      setMessage('Issue submitted successfully!');
    } catch (error) {
      setMessage('Error submitting issue. Please try again.');
    }
  };

  return (
    <div>
      <h2>Submit an Issue</h2>
      <textarea value={issue} onChange={(e) => setIssue(e.target.value)} placeholder="Describe your issue"></textarea>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <button onClick={handleSubmit}>Submit</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SubmitIssuePage;

