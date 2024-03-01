// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectTheme, setUserTheme } from 'store/Header/themeSlice';
import CSS from './Theme.module.css';
export const Theme = () => {
  //   const dispatch = useDispatch();
  //   const theme = useSelector(selectTheme);
  //   const [showThemesMenu, setShowThemesMenu] = useState(false);

  //   const handleThemeChange = selectedTheme => {
  //     dispatch(setUserTheme(selectedTheme));
  //   };
  return (
    <>
      {/* <div className="menu">
        {showThemesMenu ? (
          <div className="themes-menu" onClick={() => setShowThemesMenu(false)}>
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
            </div> */}
      <button className={CSS.theme_btn}>Themes</button>
    </>
  );
};
