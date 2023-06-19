import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
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
              <i className="fas fa-home"></i>
              </div>
            </NavLink>
          </div>
          <div className='AllPlaylistSideBar'>
            <NavLink to="/playlist/all" onClick={handleLinkClick}>
              <div>
                All Playlist
              </div>
              <div>
              <i className="fas fa-list"></i>
              </div>
            </NavLink>
          </div>
          <div className='NewPlaylistSidebar'>
            <NavLink to="/playlist/new" onClick={handleLinkClick}>
              <div>
                Create Playlist
              </div>
              <div>
              <i className="fas fa-plus"></i>
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
              <a className="GitHub" href="https://github.com/DomenikMoody/CapstoneProject" target="_blank"><i class="fab fa-github"></i></a>
              <a className="BsLinkedin" href="https://www.linkedin.com/in/domenik-moody-90370521b/" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
            <div>
              <p className='whatweused'>
                Flask ~ SQLAlchemy ~ Python ~ Javascript ~ React
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
