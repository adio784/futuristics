import React, { useState } from 'react';
import { verifyEmail } from '../API/userApi';

const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(null);

  const handleVerify = async () => {
    try {
      await verifyEmail(verificationCode);
      setVerified(true);
    } catch (error) {
      setError('Email verification failed. Please try again.');
      console.error('Email verification failed:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Verify Email</h2>
      {verified ? (
        <p className="text-green-600">Email verified successfully!</p>
      ) : (
        <div>
          <input
            type="text"
            name="token"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Enter verification code"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleVerify}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Verify Email
          </button>
          {error && <p className="text-red-600">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
