import CSS from './UserInfo.module.css';
import sprite from '../../assets/images/sprite.svg';

export const UserInfo = ({ selectedTheme }) => {
  let iconId;
  switch (selectedTheme) {
    case 'dark':
      iconId = '#default-user-icon-dark-68';
      break;
    case 'light':
      iconId = '#default-user-icon-light-68';
      break;
    case 'violet':
      iconId = '#default-user-icon-violet-68';
      break;
    default:
      iconId = '#default-user-icon-dark-68'; // За замовчуванням обрати темну тему
  }

  return (
    <div className={CSS.user_info}>
      <p className={CSS.user_name}>Name</p>
      <svg className={CSS.user_icon}>
        <use href={sprite + iconId} />
      </svg>
    </div>
  );
};
