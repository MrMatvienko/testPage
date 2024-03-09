import CSS from './EditModal.module.css';
import sprite from '../../assets/images/sprite.svg';

export const EditModal = ({ selectedTheme, toggleModal }) => {
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

  return (
    <div className={CSS.modalContainer}>
      <svg className={CSS.userIconClose} onClick={toggleModal}>
        <use href={sprite + '#close-18'} />
      </svg>
      <div className={CSS.infoContainer}>
        <h2 className={CSS.modalTitle}>Edit profile</h2>
        <div className={CSS.avatarIcon}>
          <svg className={CSS.userIcon}>
            <use href={sprite + iconId} />
          </svg>
          <button className={CSS.buuttonPlus}>+</button>
        </div>

        <form className={CSS.formContainer}>
          <div className={CSS.inputContainer}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={CSS.inputModal}
            />
          </div>

          <div className={CSS.inputContainer}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={CSS.inputModal}
            />
          </div>

          <div className={CSS.inputContainer}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={CSS.inputModal}
            />
          </div>

          <button className={CSS.sendButton}>Send</button>
        </form>
      </div>
    </div>
  );
};
