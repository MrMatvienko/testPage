import CSS from './UserInfo.module.css';
import sprite from '../../assets/images/sprite.svg';
import { EditModal } from 'components/EditModal/EditModal';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { useState } from 'react';

export const UserInfo = ({ selectedTheme }) => {
  const [showModal, setShowModal] = useState(false);
  const { avatarURL } = useSelector(selectUser);

  let iconToShow;
  switch (selectedTheme) {
    case 'dark':
      iconToShow = avatarURL || `${sprite}#default-user-icon-dark-68`;
      break;
    case 'light':
      iconToShow = avatarURL || `${sprite}#default-user-icon-light-68`;
      break;
    case 'violet':
      iconToShow = avatarURL || `${sprite}#default-user-icon-violet-68`;
      break;
    default:
      iconToShow = avatarURL || `${sprite}#default-user-icon-dark-68`;
      break;
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={CSS.user_info}>
      <p className={CSS.user_name}>Name</p>
      <div>
        <svg className={CSS.user_icon} onClick={toggleModal}>
          <use href={iconToShow} />
        </svg>
      </div>
      {showModal && (
        <EditModal selectedTheme={selectedTheme} toggleModal={toggleModal} />
      )}
    </div>
  );
};
