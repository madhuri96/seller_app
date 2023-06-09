import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend signup route
      const response = await axios.post(
        'http://localhost:8000/api/auth/signup',
        {
          email,
          businessName,
          password,
          confirmPassword,
        }
      );

      console.log(response.data); // Success message
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during signup:', error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Business Name'
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        required
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type='password'
        placeholder='Confirm Password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignupForm;
