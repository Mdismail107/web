import React, { useEffect, useState } from 'react';
import {
  FaChartBar,
  FaEnvelope,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaAngleLeft
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMinimized(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsMinimized((prev) => !prev);
  };

  const menuItems = [
    { path: '/leads', icon: <FaUser />, label: ' Profile' },
    { path: '/analytics', icon: <FaChartBar />, label: ' Analytics' },
    { path: '/mail', icon: <FaEnvelope />, label: ' Mail' },
    { path: '/sales', icon: <FaShoppingCart />, label: ' Sales' }
  ];

  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
      <div className="sidebar-header">
        {!isMinimized && <div className="logo">Dashboard</div>}
        <button className="toggle-btn" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          {isMinimized ? <FaBars /> : <FaAngleLeft />}
        </button>
      </div>

      <ul className="menu">
        {menuItems.map(({ path, icon, label }) => (
          <li key={path} className={location.pathname === path ? 'active' : ''}>
            <Link to={path}>
              {icon}
              {!isMinimized && <span>{label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
