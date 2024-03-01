import React, { useState } from 'react';
import CSS from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, selectUser, setUserTheme } from 'store/Header/themeSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const theme = useSelector(selectTheme);
  const [showThemesMenu, setShowThemesMenu] = useState(false);

  const handleThemeChange = selectedTheme => {
    dispatch(setUserTheme(selectedTheme));
  };

  return (
    <div className={CSS.header_container}>
      <button className={CSS.btn_burger}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={CSS.userblock}>
        <div className="menu">
          {showThemesMenu ? (
            <div
              className="themes-menu"
              onClick={() => setShowThemesMenu(false)}
            >
              <select
                value={theme}
                onChange={e => handleThemeChange(e.target.value)}
              >
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="purple">purple</option>
              </select>
            </div>
          ) : (
            <button
              className="themes-btn"
              onClick={() => setShowThemesMenu(true)}
            >
              Themes
            </button>
          )}
        </div>
        <div className="user-info">
          <span>Name</span>
          <span>X</span>
        </div>
      </div>
    </div>
  );
};
