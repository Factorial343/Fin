import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import logo from './images/logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const backendBaseUrl = 'http://localhost:5000'; // Update to Codespaces/public when needed

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendBaseUrl}/login`, { username, password });
      alert(res.data.message);
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      alert(err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="login-page">
      {/* Slim futuristic header */}
      <header className="login-header">
        <img src={logo} alt="NeuroBank Logo" className="login-header__logo" />
        <h1 className="login-header__title">Welcome Back to NeuroBank</h1>
      </header>

      {/* Floating glassy login container */}
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-field">
            <input
              type="text"
              className="login-input"
              placeholder="User name / Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="login-field">
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Log In Now
          </button>
          <p style={{ marginTop: '1rem' }}>
            Don’t have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
