import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";  // reuse login styles for now
import { useNavigate, Link } from 'react-router-dom';
import logo from './images/logo.png';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const backendBaseUrl = 'http://localhost:5000'; //before trying to run change to codespace url and make sure 5000 port is public

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendBaseUrl}/register`, { username, password });
      alert(res.data);  // Show server's success message
        } catch (err) {
      alert(err.response ? err.response.data : err.message);  // Show error message
    }
  };

  return (
    <div className="login-page">
      {/* Slim futuristic header */}
      <header className="login-header">
        <img src={logo} alt="NeuroBank Logo" className="login-header__logo" />
        <h1 className="login-header__title">Join NeuroBank Today</h1>
      </header>

      {/* Floating glassy registration container */}
      <div className="login-container">
        <form className="login-form" onSubmit={handleRegister}>
          <div className="login-field">
            <input
              type="text"
              className="login-input"
              placeholder="Choose a Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="login-field">
            <input
              type="password"
              className="login-input"
              placeholder="Create a Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Register Now
          </button>
          <p style={{ marginTop: '1rem' }}>
            Already have an account? <Link to="/">Log in here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
