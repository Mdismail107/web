import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(null); // Track email validity
  const navigate = useNavigate();

  // Handle email input changes
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailValue === "") {
      setEmailValid(null); // No email entered
    } else if (emailValue.match(pattern)) {
      setEmailValid(true); // Valid email
    } else {
      setEmailValid(false); // Invalid email
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Simple validation (you can enhance this)
    if (emailValid === true) {
      // Redirect to Home page after successful login
      navigate('/Home'); // Use the navigate function to go to the next page
    } else {
      // Handle invalid login (optional)
      alert('Please enter a valid email');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="input-group">
          <label htmlFor="email" id="email-label">Email</label>
          <div className="input-with-icon">
            <input
              type="email"
              id="email-id"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <i
              className={`fa-solid ${emailValid === true ? 'fa-check' : emailValid === false ? 'fa-envelope' : 'fa-envelope'}`}
              style={{
                color: emailValid === true ? '#4bb543' : emailValid === false ? '#de0611' : '#b4b4b4',
                fontSize: '18px'
              }}
            ></i>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="create-password">Create password</label>
          <input type="password" id="create-password" name="create-password" required />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm password</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        <button type="submit" className="signup-button"><a href="./Home">Signup</a></button>
      </form>
      <p className="login-link">Already have an account? <a href="./login">Login</a></p>
      <div className="social-signup">
        <p>Or</p>
        <button className="social-button facebook"><a href='https://www.facebook.com/'>Signup with Facebook
            </a></button>
        <button className="social-button google"><a href='https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1'>Signup with Google
            </a></button>
      </div>
    </div>
  );
}

export default Register;
