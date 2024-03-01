import CSS from './UserInfo.module.css';
export const UserInfo = () => {
  return (
    <>
      <div className={CSS.user_info}>
        <span className={CSS.user_span}>Name</span>
        <span className={CSS.user_span}>X</span>
      </div>
    </>
  );
};
