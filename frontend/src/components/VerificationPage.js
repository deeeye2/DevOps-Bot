import React, { useState } from 'react';
import axios from 'axios';

const VerificationPage = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleVerify = async () => {
    try {
      const response = await axios.post('/api/verify', { email, code });
      setMessage('Verification successful! You can now login.');
      // Redirect to login page
    } catch (error) {
      setMessage('Invalid verification code. Please try again.');
    }
  };

  return (
    <div>
      <h2>Verify Your Account</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Verification Code" />
      <button onClick={handleVerify}>Verify</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VerificationPage;


