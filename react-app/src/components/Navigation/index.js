import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Sidebar from '../Sidebar';
import './Navigation.css';


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="navbar">
      <div className="LogoDiv">
        <button className="MenuButton " onClick={handleSidebarToggle}>
        <i className="fa-solid fa-bars"></i>
        </button>
        <NavLink exact to="/" className="LogoLink">
          <img className="Logo" src="http://otakuxpress.s3.amazonaws.com/c20bde2d7f2b45f99a0a736cc49d325d.png" alt="Logo" />
          <span className="logoText">otakuxpress</span>
        </NavLink>
      </div>
      {isLoaded && (
        <div>
          <ProfileButton user={sessionUser} />
        </div>
      )}
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
    </div>
  );
}

export default Navigation;
