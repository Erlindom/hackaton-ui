import React from 'react';
import { useLocation } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className='d-flex'>
      {!isAuthPage && (
        <div className='col-auto sticky-dashboard'>
          <Dashboard />
        </div>
      )}
      <div className='w-100 p-4 course-content'>
        <Outlet /> {/* Renderiza los componentes de la ruta actual */}
      </div>
    </div>
  );
};

export default MainLayout;
