import CSS from './UserInfo.module.css';
import sprite from '../../assets/images/sprite.svg';
import { useState } from 'react';
import { EditModal } from 'components/EditModal/EditModal';

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
      iconId = '#default-user-icon-dark-68';
  }

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={CSS.user_info}>
      <p className={CSS.user_name}>Name</p>
      <svg className={CSS.user_icon} onClick={toggleModal}>
        <use href={sprite + iconId} />
      </svg>
      {showModal && (
        <EditModal selectedTheme={selectedTheme} toggleModal={toggleModal} />
      )}
    </div>
  );
};
