import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        username,
        password,
      });

      if (response.status === 200) {
        const { accessToken, expiresIn, ...userData } = response.data;

    
        const expirationTime = Date.now() + expiresIn * 1000;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('accessTokenExpiration', expirationTime);

        setUsername('');
        setPassword('');

        window.location.href = '/';
        alert('Login success');
      } else {
        setMessage('Invalid username or password');
      }
    } catch (err) {
      console.log(err);
      setMessage('An error occurred during login');
    }
  };

  const isTokenExpired = () => {
    const expirationTime = localStorage.getItem('accessTokenExpiration');
    return expirationTime && Date.now() > parseInt(expirationTime);
  };

  if (isTokenExpired()) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('accessTokenExpiration');
  }

  return (
    <div style={{ textAlign: 'center', alignItems: 'center' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {message && <p>{message}</p>}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <p>
          I don't have an account <a href="/register">Create one!</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
