import CSS from './EditModal.module.css';
import sprite from '../../assets/images/sprite.svg';
export const EditModal = ({ selectedTheme }) => {
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
      <svg className={CSS.userIconClose}>
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

        <div className={CSS.inputsContainer}>
          <form className={CSS.inputsContainer}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={CSS.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={CSS.input}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={CSS.input}
            />
          </form>
          <button className={CSS.sendButton}>Send</button>
        </div>
      </div>
    </div>
  );
};
