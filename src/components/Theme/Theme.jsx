// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectTheme, setUserTheme } from 'store/Header/themeSlice';
// import CSS from './Theme.module.css';
// export const Theme = () => {
//   const dispatch = useDispatch();
//   const theme = useSelector(selectTheme);
//   const [showThemesMenu, setShowThemesMenu] = useState(false);

//   //   const handleThemeChange = selectedTheme => {
//   //     dispatch(setUserTheme(selectedTheme));
//   //   };
//   return (
//     <div ref={themeRef} onClick={handlePopup}>
//       <Text>Theme</Text>
//       <Icon isOpen={isShownPopup}>
//         <use href={sprite + '#icon-chevron-down'} />
//       </Icon>

//       {isShownPopup && (
//         <PopupBlock>
//           {theme.map(({ name }) => (
//             <PopupItem
//               onClick={() => handleTheme(name)}
//               key={name}
//               className={activeUserTheme === name ? 'active' : ''}
//             >
//               {name[0].toUpperCase() + name.slice(1)}
//             </PopupItem>
//           ))}
//         </PopupBlock>
//       )}
//     </div>
//   );
// };
