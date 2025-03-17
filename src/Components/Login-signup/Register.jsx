import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(null); // Track email validity

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

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form action="#">
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
        <button type="submit" className="signup-button">Signup</button>
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
