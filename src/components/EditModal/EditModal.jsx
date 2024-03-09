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

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateUserAsync } from '../path/to/userActions';

// export const EditModal = ({ selectedTheme }) => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     avatarURL: '',
//   });

//   let iconId;
//   switch (selectedTheme) {
//     case 'dark':
//       iconId = '#default-user-icon-dark-68';
//       break;
//     case 'light':
//       iconId = '#default-user-icon-light-68';
//       break;
//     case 'violet':
//       iconId = '#default-user-icon-violet-68';
//       break;
//     default:
//       iconId = '#default-user-icon-dark-68';
//   }

//   // Встановлення значення iconId, в залежності від наявності avatarURL
//   const iconToShow = formData.avatarURL ? formData.avatarURL : iconId;

//   const handleFormSubmit = () => {
//     // Викликати дію для оновлення користувача з даними форми
//     dispatch(updateUserAsync(formData));
//   };

//   const handleInputChange = e => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className={CSS.modalContainer}>
//       <h2>Edit profile</h2>
//       <div>
//         {/* Форма редагування профілю */}
//         <svg className={CSS.userIcon}>
//           <use href={sprite + iconToShow} />
//         </svg>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           placeholder="Name"
//           className={CSS.input}
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           placeholder="Email"
//           className={CSS.input}
//         />
//         <input
//           type="text"
//           name="avatarURL"
//           value={formData.avatarURL}
//           onChange={handleInputChange}
//           placeholder="Avatar URL"
//           className={CSS.input}
//         />
//       </div>
//       <button className={CSS.sendButton} onClick={handleFormSubmit}>
//         Send
//       </button>
//     </div>
//   );
// };
