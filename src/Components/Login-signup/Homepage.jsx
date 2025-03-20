import React, { useState, useEffect } from 'react';
import './Homepage.css';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    middleName: 'Michael',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    gender: 'male',
    password: 'password123',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [emailValid, setEmailValid] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  useEffect(() => {
    const checkSidebar = () => {
      const sidebar = document.querySelector('.sidebar');
      setIsSidebarMinimized(sidebar?.classList.contains('minimized') || false);
    };

    checkSidebar();
    const observer = new MutationObserver(checkSidebar);
    const sidebarElement = document.querySelector('.sidebar');
    if (sidebarElement) {
      observer.observe(sidebarElement, { attributes: true, attributeFilter: ['class'] });
    }

    return () => observer.disconnect();
  }, []);

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfileData(prev => ({ ...prev, [id]: value }));

    if (id === 'email') {
      const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      setEmailValid(value === '' ? null : pattern.test(value));
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (emailValid || profileData.email === '') {
      alert('Profile updated successfully!');
      setIsEditing(false);
    } else {
      alert('Please enter a valid email.');
    }
  };

  return (
    <div
      className="profile-wrapper"
      style={{
        marginLeft: isSidebarMinimized ? '80px' : '270px',
        transition: 'margin-left 0.3s ease',
      }}
    >
      <div className="profile-pic-container">
        <label htmlFor="profile-upload">
        <img
            src={profilePic|| require('../Assets/profile.png')}
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
          {['firstName', 'middleName', 'lastName', 'phone', 'password'].map((field) => (
            <div className="input-group" key={field}>
              <label htmlFor={field}>{field.replace(/([A-Z])/, ' $1').replace(/^./, str => str.toUpperCase())}</label>
              <input
                type={field === 'password' ? 'password' : 'text'}
                id={field}
                value={profileData[field]}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          ))}

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={profileData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={profileData.gender}
              onChange={handleInputChange}
              disabled={!isEditing}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="button-group">
            {isEditing ? (
              <button type="submit" className="save-button">Save</button>
            ) : (
              <button type="button" className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
            )}
          </div>
        </form>

        <p className="login-link">
          Want to go back to login? <a href="./Login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
