import CSS from './Header.module.css';
import { HeaderBurger } from 'components/HeaderBurger/HeaderBurger';
import SideBar from 'components/SideBar/SideBar';
import { Theme } from 'components/Theme/Theme';

export const Header = () => {
  return (
    <div className={CSS.homePage}>
      <div>
        <SideBar />
      </div>

      <div className={CSS.headerContainer}>
        <HeaderBurger />
        <div className={CSS.userBlock}>
          <Theme />
        </div>
      </div>
    </div>
  );
};
