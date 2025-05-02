import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";  // reuse login styles for now



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
    <div className="login_body">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleRegister}>
              <div className="login__field">
                <i className="login__icon fas fa-user" />
                <input
                  type="text"
                  className="login__input"
                  placeholder="New Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock" />
                <input
                  type="password"
                  className="login__input"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="button login__submit">
                <span className="button__text">Register Now</span>
                <i className="button__icon fas fa-chevron-right" />
              </button>
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

export default Register;
