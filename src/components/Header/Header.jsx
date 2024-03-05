import CSS from './Header.module.css';
import { HeaderBurger } from 'components/HeaderBurger/HeaderBurger';
import { Theme } from 'components/Theme/Theme';

export const Header = ({ toggleSidebar }) => {
  return (
    <div className={CSS.headerContainer}>
      <HeaderBurger toggleSidebar={toggleSidebar} />
      <div className={CSS.userBlock}>
        <Theme />
      </div>
    </div>
  );
};
