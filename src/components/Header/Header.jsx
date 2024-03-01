import CSS from './Header.module.css';
import { HeaderBurger } from 'components/HeaderBurger/HeaderBurger';
import { Theme } from 'components/Theme/Theme';
import { UserInfo } from 'components/UserInfo/UserInfo';

export const Header = () => {
  return (
    <div className={CSS.header_container}>
      <HeaderBurger />
      <div className={CSS.userblock}>
        <Theme />
        <UserInfo />
      </div>
    </div>
  );
};
