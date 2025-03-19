// import React from 'react';
// import { FaChartBar, FaEnvelope, FaShoppingCart, FaUser } from 'react-icons/fa';
// import './sidebar.css';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="logo">ZANOLE</div>
//       <ul className="menu">
//         <li className="active">
//           <FaUser /> <span>Leads</span>
//         </li>
//         <li>
//           <FaChartBar /> <span>Analytics</span>
//         </li>
//         <li>
//           <FaEnvelope /> <span>Mail</span>
//         </li>
//         <li>
//           <FaShoppingCart /> <span>Sales</span>
//         </li>
//         <li>
//           <FaUser /> <span>Leads</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useEffect,useState } from 'react';
import { FaChartBar, FaEnvelope, FaShoppingCart, FaUser, FaBars, FaAngleLeft } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMinimized(true);
      } else {
        setIsMinimized(false);
      }
    };

    handleResize(); // initial check

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
      <div className="sidebar-header">
        {!isMinimized && <div className="logo">ZANOLE</div>}
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isMinimized ? <FaBars /> : <FaAngleLeft />}
        </button>
      </div>

      <ul className="menu">
        <li className="active">
          <FaUser /> {!isMinimized && <span>Leads</span>}
        </li>
        <li>
          <FaChartBar /> {!isMinimized && <span>Analytics</span>}
        </li>
        <li>
          <FaEnvelope /> {!isMinimized && <span>Mail</span>}
        </li>
        <li>
          <FaShoppingCart /> {!isMinimized && <span>Sales</span>}
        </li>
        <li>
          <FaUser /> {!isMinimized && <span>Leads</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
