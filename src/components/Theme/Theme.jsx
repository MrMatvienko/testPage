import { useState } from 'react';
import CSS from './Theme.module.css';
export const Theme = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleThemeChange = theme => {
    document.documentElement.setAttribute('data-theme', theme);
  };
  return (
    <div className={CSS.theme_container}>
      <p className={CSS.theme_text} onClick={toggleMenu}>
        Theme
      </p>
      <svg
        onClick={toggleMenu}
        className={CSS.theme_icon}
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6.5L8 10.5L12 6.5"
          stroke="white"
          strokeOpacity="0.8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showMenu && (
        <div className={CSS.dropdownMenu}>
          <ul>
            <li onClick={() => handleThemeChange('dark')}>Dark</li>
            <li onClick={() => handleThemeChange('light')}>Light</li>
            <li onClick={() => handleThemeChange('violet')}>Violet</li>
          </ul>
        </div>
      )}
    </div>
  );
};
