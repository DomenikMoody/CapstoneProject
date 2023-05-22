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

  return (
    <div className={ulClassName} ref={ulRef}>
      <div className="SidebarContent">
        <div>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to={`/manage/`} activeClassName="active">
            My Profile
          </NavLink>
        </div>
        <div>
          <NavLink to="/playlist/all" activeClassName="active">
            All Playlist
          </NavLink>
        </div>
        <div>
          <NavLink to="/playlist/new" activeClassName="active">
            Create Playlist
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
