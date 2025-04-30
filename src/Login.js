import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const backendBaseUrl = 'https://Add-your-url-5000.app.github.dev'; //before trying to run change to codespace url and make sure 5000 port is public
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendBaseUrl}/login`, { username, password });
      alert(res.data.message);
      localStorage.setItem('token', res.data.token);
      navigate('/Home');  // Redirect to home after successful login
    } catch (err) {
      alert(err.response ? err.response.data : err.message);
    }
  };


  return (
    <div className="login_body">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
          <form className="login" onSubmit={handleLogin}>
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                type="text"
                className="login__input"
                placeholder="User name / Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
            <p style={{ marginTop: '1rem' }}>
              Don't have an account? <Link to="/register">Register here</Link>
            </p>

          </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

