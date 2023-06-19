import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Sidebar from '../Sidebar';
import './Navigation.css';
import { useModal } from '../../context/Modal';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();
  const { closeModal } = useModal();

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const handleSearchbarSubmit = (e) => {
    e.preventDefault();
    setSearchQuery('');
    history.push(`/search/${searchQuery}`);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const closeModalsAll = (e) => {
    e.preventDefault();
    closeModal();
    history.push('/');
  };

  const isSearchButtonDisabled = searchQuery === '';

  return (
    <div className="navbar">
      <div className="LogoDiv">
        <button className="MenuButton" onClick={handleSidebarToggle}>
          <i className="fas fa-bars"></i>
        </button>
        <NavLink exact to="/" className="LogoLink" onClick={closeModalsAll}>
          <img
            className="Logo"
            src="http://otakuxpress.s3.amazonaws.com/c20bde2d7f2b45f99a0a736cc49d325d.png"
            alt="Logo"
          />
          <span className="logoText">otakuxpress</span>
        </NavLink>
      </div>
      <div className="searchContainer">
        <form className="SearchForm" onSubmit={handleSearchbarSubmit}>
          <div className="SearchInputContainer">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="SearchInput"
            />
            <button
              type="submit"
              className="SearchButton"
              disabled={isSearchButtonDisabled}
            >
              <i className="fas fa-search SearchIcon"></i>
            </button>
          </div>
        </form>
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
