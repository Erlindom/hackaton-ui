import React from 'react';
import { useLocation } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './context/context';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <UserProvider>
      <div className='d-flex'>
        {!isAuthPage && (
          <div className='col-auto sticky-dashboard'>
            <Dashboard />
          </div>
        )}
        <div className='w-100 p-4 course-content'>
          <Outlet /> {/* Render the components of the current route */}
        </div>
      </div>
    </UserProvider>
  );
};

export default MainLayout;
