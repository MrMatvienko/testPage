import { useEffect, useState } from 'react';
import CSS from './Theme.module.css';
import { UserInfo } from 'components/UserInfo/UserInfo';
import sprite from '../../assets/images/sprite.svg';
export const Theme = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem('selectedTheme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('selectedTheme', selectedTheme); // Збереження обраної теми в локальному сховищі
  }, [selectedTheme]);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleThemeChange = theme => {
    setSelectedTheme(theme);
  };

  return (
    <div className={CSS.infoContainer}>
      <div className={CSS.theme_container}>
        <p className={CSS.theme_text} onClick={toggleMenu}>
          Theme
        </p>
        <svg onClick={toggleMenu} className={CSS.themeIcon}>
          <use href={sprite + '#select-menu-16'} />
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
      <UserInfo selectedTheme={selectedTheme} />
    </div>
  );
};
