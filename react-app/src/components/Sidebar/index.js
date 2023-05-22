import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './sidebar.css';

function Sidebar({ isOpen, onClose }) {
  const user = useSelector(state => state.session.user);
  const ulRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const closeMenu = (event) => {
      if (ulRef.current && !ulRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', closeMenu);
    }

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isOpen, onClose]);

  const ulClassName = `Sidebar ${isOpen ? 'active' : ''}`;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={ulClassName} ref={ulRef}>
      <div className="SidebarContent">
        <div>
          <NavLink exact to="/" onClick={handleLinkClick}>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/playlist/all" onClick={handleLinkClick}>
            All Playlist
          </NavLink>
        </div>
        <div>
          <NavLink to="/playlist/new" onClick={handleLinkClick}>
            Create Playlist
          </NavLink>
        </div>
        <div>
          <NavLink to="/manage/" onClick={handleLinkClick}>
            My Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
