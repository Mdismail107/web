import React, { useState } from 'react';
import './Homepage.css';

const ProfilePage = () => {
  const [firstName, setFirstName] = useState('John');
  const [middleName, setMiddleName] = useState('Michael');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [gender, setGender] = useState('male');
  const [password, setPassword] = useState('password123');
  const [isEditing, setIsEditing] = useState(false);
  const [emailValid, setEmailValid] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

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
      alert('Profile updated successfully!');
      setIsEditing(false);
    } else {
      alert('Please enter a valid email.');
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-pic-container">
        <label htmlFor="profile-upload">
          <img
            src={profilePic || require('../Assets/profile.png')}
            alt="Profile"
            className="profile-pic"
          />
        </label>
        <input
          type="file"
          id="profile-upload"
          accept="image/*"
          onChange={handleProfileChange}
          style={{ display: 'none' }}
        />
        <p className="upload-hint">Click image to change</p>
      </div>

      <div className="homepage-container">
        <h2>Profile</h2>
        <form onSubmit={handleSaveChanges}>
          <div className="input-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className="input-group">
            <label htmlFor="middle-name">Middle Name</label>
            <input
              type="text"
              id="middle-name"
              name="middle-name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className="input-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              disabled={!isEditing}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              disabled={!isEditing}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!isEditing}
              required
            />
          </div>

          <div className="button-group">
            {isEditing ? (
              <button type="submit" className="save-button">
                <a href="./sidebar.jsx">Save</a>
              </button>
            ) : (
              <button type="button" className="edit-button" onClick={handleEditClick}>
                Edit
              </button>
            )}
          </div>
        </form>

        <p className="login-link">Want to go back to login? <a href="./Login">Login</a></p>
      </div>
    </div>
  );
};

export default ProfilePage;
