import { useEffect, useRef, useState } from 'react';
import { Header } from './Header/Header';
import SideBar from './SideBar/SideBar';
import CSS from './App.module.css';

export const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarBackdropRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 1440);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    if (window.innerWidth < 1440) {
      setShowSidebar(false);
    }
  };

  const handleBackdropClick = event => {
    if (event.target === sidebarBackdropRef.current) {
      closeSidebar();
    }
  };
  return (
    <div>
      {showSidebar && (
        <div
          className={CSS.sidebarBackdrop}
          ref={sidebarBackdropRef}
          onClick={handleBackdropClick}
        ></div>
      )}
      <div style={{ display: 'flex' }}>
        {showSidebar && <SideBar />}
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <header>
            <Header toggleSidebar={toggleSidebar} />
          </header>
        </div>
      </div>
    </div>
  );
};
