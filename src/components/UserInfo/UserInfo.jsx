import CSS from './UserInfo.module.css';
import sprite from '../../assets/images/sprite.svg';
import { useState } from 'react';
import { EditModal } from 'components/EditModal/EditModal';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

export const UserInfo = ({ selectedTheme }) => {
  const { user, avatarURL } = useSelector(selectUser);

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
      iconId = '#default-user-icon-dark-68';
  }

  const iconPath = `${sprite}${iconId}`;

  if (!user) {
    return null;
  }

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={CSS.user_info}>
      <p className={CSS.user_name}>Name</p>
      <img
        src={avatarURL || iconPath}
        alt="User Icon"
        className={CSS.user_icon}
        onClick={toggleModal}
      />

      {showModal && (
        <EditModal selectedTheme={selectedTheme} toggleModal={toggleModal} />
      )}
    </div>
  );
};
