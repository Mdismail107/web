import React, { useState } from 'react';
import './Homepage.css';
// import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [firstName, setFirstName] = useState('John');  // Initial profile values
  const [middleName, setMiddleName] = useState('Michael'); // New field for Middle Name
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('123-456-7890');  // New field for Phone Number
  const [gender, setGender] = useState('male');  // New field for Gender (default value is male)
  const [password, setPassword] = useState('password123');
  const [isEditing, setIsEditing] = useState(false); // To toggle edit mode
  const [emailValid, setEmailValid] = useState(null); // Track email validity
//   const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailValue === "") {
      setEmailValid(null);
    } else if (emailValue.match(pattern)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    if (emailValid === true) {
      // Save changes logic here (e.g., save to server or local storage)
      alert('Profile updated successfully!');
      setIsEditing(false); // Exit editing mode
    } else {
      alert('Please enter a valid email.');
    }
  };

  const handleEditClick = () => {
    setIsEditing(true); // Enter edit mode
  };

  return (
        <div className="profile-wrapper">
          {/* Profile Settings Label on Left */}
          <div className="profile-settings-label">
          <i className="fa-solid fa-user-gear"></i>
          <span>Profile Settings</span></div>

      
    <div className="signup-container">
      <h2>Profile</h2>
      <form onSubmit={handleSaveChanges}>
        {/* First Name */}
        <div className="input-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={!isEditing} // Disable input if not in edit mode
          />
        </div>

        {/* Middle Name */}
        <div className="input-group">
          <label htmlFor="middle-name">Middle Name</label>
          <input
            type="text"
            id="middle-name"
            name="middle-name"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            disabled={!isEditing} // Disable input if not in edit mode
          />
        </div>

        {/* Last Name */}
        <div className="input-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={!isEditing} // Disable input if not in edit mode
          />
        </div>

        {/* Email */}
        <div className="input-group">
          <label htmlFor="email" id="email-label">Email</label>
          <input
            type="email"
            id="email-id"
            name="email"
            value={email}
            onChange={handleEmailChange}
            disabled={!isEditing} // Disable input if not in edit mode
            required
          />
          <i
            className={`fa-solid ${emailValid === true ? 'fa-check' : emailValid === false ? 'fa-xmark' : 'fa-envelope'}`}
            style={{
              color: emailValid === true ? '#4bb543' : emailValid === false ? '#de0611' : '#b4b4b4'
            }}
          ></i>
        </div>

        {/* Phone Number */}
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={!isEditing} // Disable input if not in edit mode
          />
        </div>

        {/* Gender */}
        <div className="input-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            disabled={!isEditing} // Disable input if not in edit mode
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Password */}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={!isEditing} // Disable input if not in edit mode
            required
          />
        </div>

        {/* Buttons */}
        <div className="button-group">
          {isEditing ? (
            <button type="submit" className="save-button"><a href="./profile">Save Change</a></button>
          ) : (
            <button type="button" className="edit-button" onClick={handleEditClick}>Edit</button>
          )}
        </div>
      </form>

      {/* Go back to login link */}
      <p className="login-link">Want to go back to login? <a href="./Login">Login</a></p>

    </div> 
    </div>
  );
};

export default ProfilePage;
