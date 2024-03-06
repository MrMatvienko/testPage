import { useEffect, useRef, useState } from 'react';
import { Header } from './Header/Header';
import SideBar from './SideBar/SideBar';

export const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);
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

  useEffect(() => {
    const handleClickOut = event => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        window.innerWidth < 1440
      ) {
        setShowSidebar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOut);

    return () => {
      document.removeEventListener('mousedown', handleClickOut);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div style={{ display: 'flex' }}>
      {showSidebar && (
        <div ref={sidebarRef}>
          <SideBar />
        </div>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <header>
          <Header toggleSidebar={toggleSidebar} />
        </header>
      </div>
    </div>
  );
};
