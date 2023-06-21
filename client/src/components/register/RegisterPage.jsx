import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const[username, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/auth/register', {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        setMessage(response.data.message);
        navigate('/login'); // Redirect to login page
      } else {
        setMessage('An error occurred during registration');
      }
    } catch (err) {
      console.log(err);
      setMessage('An error occurred during registration');
    }
  };

  return (
    <div style={{textAlign:'center', alignItems:'center'}}>
        
        <h1>Register/</h1>
      <form onSubmit={handleSubmit}>
      {message && <p>{message}</p>}
        <label htmlFor="firstName"> Name:</label>
        <input
          type="text"
          id="firstName"
          value={username}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      <p>I already have an account <a href="/login">Login!</a></p>
      </form>
    </div>
  );
};

export default RegistrationForm;
