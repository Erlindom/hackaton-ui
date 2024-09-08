import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useLocation } from 'react-router-dom';
import { useUserContext } from '../../context/context';

const Dashboard: React.FC = () => {
  const { role } = useUserContext();
  const location = useLocation();

  const getLinkClassName = (path: string) => {
    return location.pathname === path ? 'nav-link text-white px-2 active' : 'nav-link text-white px-2';
  };

  return (
    <div className='sidebar d-flex flex-column justify-content-between bg-sidebar text-white p-4 vh-100 border-end'>
      <div>
        <Link to="/courses" className='d-flex align-items-center'>
          <i className='bi bi-bootstrap fs-5 me-2'></i>
          <span className='fs-4'>Education</span>
        </Link>
        <hr className='text-secondary mt-2' />
        <ul className='nav nav-pills flex-column p-0 m-0'>
          <li className='nav-item p-1'>
            <Link to="/courses" className={getLinkClassName('/courses')}>
              <i className='bi bi-camera-video me-2 fs-5'></i>
              <span className='fs-6'>Courses</span>
            </Link>
          </li>
          {role === 'Instructor' && (
            <>
              <li className='nav-item p-1'>
                <Link to="/my-courses" className={getLinkClassName('/my-courses')}>
                  <i className='bi bi-mortarboard me-2 fs-5'></i>
                  <span className='fs-6'>My courses</span>
                </Link>
              </li>
              <li className='nav-item p-1'>
                <Link to="/create-course" className={getLinkClassName('/create-course')}>
                  <i className='bi bi-plus-circle me-2 fs-5'></i>
                  <span className='fs-6'>Create course</span>
                </Link>
              </li>
            </>
          )}
          <li className='nav-item p-1'>
            <Link to="/learning-progress" className={getLinkClassName('/learning-progress')}>
              <i className='bi bi-camera-video me-2 fs-5'></i>
              <span className='fs-6'>Learning Progress</span>
            </Link>
          </li>
          <li className='p-2'>
            <w3m-button />
          </li>
        </ul>
      </div>

      <div>
        <hr className='text-secondary' />
        <Link to="/profile" className={getLinkClassName('/profile')}>
          <i className='bi bi-person fs-'></i>
          <span className='fs-5'>Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
