import React, { useState } from 'react';
import './Login-signup.css';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailValue === "") {
      setEmailValid(null); // No email entered
    } else if (emailValue.match(pattern)) {
      setEmailValid(true); 
      // navigate('./Home');
    } else {
      setEmailValid(false); // Invalid email
    }
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Simple validation (you can enhance this)
    if (emailValid === true) {
      // Redirect to Home page after successful login
      navigate('/home'); // Use the navigate function to go to the next page
    } else {
      // Handle invalid login (optional)
      alert('Please enter a valid email');
    }
  };

  return (
    <div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="input-group">
          <label htmlFor="email" id="email-label">Email</label>
          <input
            type="email"
            id="email-id"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {/* Dynamically change the icon class and color based on email validity */}
          <i
            className={`fa-solid ${emailValid === true ? 'fa-check' : emailValid === false ? 'fa-envelope' : 'fa-envelope'}`}
            style={{ color: emailValid === true ? '#4bb543' : emailValid === false ? '#de0611' : '#b4b4b4' }}
          ></i>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="create-password" name="create-password" required />
        </div>
        <button type="submit" className="login-button"><a href='./Home'>Login</a></button>
      </form>
      <p className="login-link">Don't have an account? <a href="./Register">Signup</a></p>
      <div className="social-signup">
        <p>Or</p>
        <button className="social-button facebook"><a href="https://www.facebook.com/">Login with Facebook
          </a></button>
        <button className="social-button google"><a href='https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1'>Login with Google</a></button>
      </div>
    </div>
  );
};

export default LoginSignup;
