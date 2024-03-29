import { useEffect, useState, useRef } from 'react';
import CSS from './Theme.module.css';
import { UserInfo } from 'components/UserInfo/UserInfo';
import sprite from '../../assets/images/sprite.svg';
import { useDispatch } from 'react-redux';
import { updateTheme } from 'store/Header/Theme/operation';

export const Theme = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem('selectedTheme') || 'dark'
  );

  const menuRef = useRef(null);
  const textRef = useRef(null);
  const svgRef = useRef(null);

  const dispatch = useDispatch();

  const handleThemeChange = theme => {
    dispatch(updateTheme({ theme }));
    setSelectedTheme(theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('selectedTheme', selectedTheme);
  }, [selectedTheme]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !textRef.current.contains(event.target) &&
        !svgRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={CSS.infoContainer}>
      <div className={CSS.theme_container}>
        <p ref={textRef} className={CSS.theme_text} onClick={toggleMenu}>
          Theme
        </p>
        <svg ref={svgRef} onClick={toggleMenu} className={CSS.themeIcon}>
          <use href={sprite + '#select-menu-16'} />
        </svg>
        {showMenu && (
          <div ref={menuRef} className={CSS.dropdownMenu}>
            <ul className={CSS.themeList}>
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
