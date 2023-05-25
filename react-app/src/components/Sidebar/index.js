import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import './sidebar.css';

function Sidebar({ isOpen, onClose }) {

  const ulRef = useRef();


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
        <div className='forflexing'>
          <div>

          <div className='LogoTitleSidebar'>
            <NavLink exact to="/" className="LogoLinkSideBar" onClick={handleLinkClick}>
              <img className="Logo" src="http://otakuxpress.s3.amazonaws.com/c20bde2d7f2b45f99a0a736cc49d325d.png" alt="Logo" />
              <span className="logoTextSideBar">otakuxpress</span>
            </NavLink>
          </div>
          <div className='HomeSideBar'>
            <NavLink exact to="/" onClick={handleLinkClick}>
              <div>
                Home
              </div>
              <div>
                <FontAwesomeIcon icon={faHouse} />
              </div>
            </NavLink>
          </div>
          <div className='AllPlaylistSideBar'>
            <NavLink to="/playlist/all" onClick={handleLinkClick}>
              <div>
                All Playlist
              </div>
              <div>
                <FontAwesomeIcon icon={faList} />
              </div>
            </NavLink>
          </div>
          <div className='NewPlaylistSidebar'>
            <NavLink to="/playlist/new" onClick={handleLinkClick}>
              <div>
                Create Playlist
              </div>
              <div>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </NavLink>
          </div>
          <div className='myProfileSidebar'>
            <NavLink to="/manage/" onClick={handleLinkClick}>
              <div>
                My Profile
              </div>
              <div>
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
            </NavLink>
          </div>
          </div>
          <div>
            <div className='icons-bottom'>
              <a className="GitHub" href="https://github.com/DomenikMoody" target="_blank"><BsGithub /></a>
              <a className="BsLinkedin" href="https://www.linkedin.com/in/domenik-moody-90370521b/" target="_blank"><BsLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
