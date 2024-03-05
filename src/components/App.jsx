import { useEffect, useState } from 'react';
import { Header } from './Header/Header';
import SideBar from './SideBar/SideBar';

export const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

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

  return (
    <div>
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

// const [isMobile, setIsMobile] = useState(false);

// useEffect(() => {
//   const handleResize = () => {
//     if (window.innerWidth < 1440) {
//       setIsMobile(true);
//       setShowSidebar(false); // Hide sidebar on mobile view
//     } else {
//       setIsMobile(false);
//       setShowSidebar(true); // Show sidebar on desktop view
//     }
//   };

//   handleResize(); // Call once on initial render
//   window.addEventListener('resize', handleResize);

//   return () => {
//     window.removeEventListener('resize', handleResize);
//   };
// }, []);

// const toggleSidebar = () => {
//   setShowSidebar(!showSidebar);
//   if (!showSidebar) {
//     document.body.style.overflow = 'hidden'; // Заборона прокрутки сторінки під час відображення сайдбару
//   } else {
//     document.body.style.overflow = ''; // Відновлення прокрутки після закриття сайдбару
//   }
// };
