import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/context';

const Dashboard: React.FC = () => {
  const { role } = useUserContext();

  console.log(role);

  return (
    <div className='sidebar d-flex flex-column justify-content-between bg-white text-black p-4 vh-100 border-end'>
      <div>
        <Link to="/courses" className='d-flex align-items-center'>
          <i className='bi bi-bootstrap fs-5 me-2'></i>
          <span className='fs-4'>Education</span>
        </Link>
        <hr className='text-secondary mt-2' />
        <ul className='nav nav-pills flex-column p-0 m-0'>
          <li className='nav-item p-1'>
            <Link to="courses" className='nav-link text-black px-2'>
              <i className='bi bi-camera-video me-2 fs-5'></i>
              <span className='fs-6'>Courses</span>
            </Link>
          </li>
          {role == 'Instructor' && (
            <>
              <li className='nav-item p-1'>
                <Link to="my-courses" className='nav-link text-black px-2'>
                  <i className='bi bi-mortarboard me-2 fs-5'></i>
                  <span className='fs-6'>My courses</span>
                </Link>
              </li>
              <li className='nav-item p-1'>
                <Link to="create-course" className='nav-link text-black px-2'>
                  <i className='bi bi-plus-circle me-2 fs-5'></i>
                  <span className='fs-6'>Create course</span>
                </Link>
              </li>
            </>
          )}
          <li className='nav-item p-1'>
            <Link to="learning-progress" className='nav-link text-black px-2'>
              <i className='bi bi-camera-video me-2 fs-5'></i>
              <span className='fs-6'>Learning Progress</span>
            </Link>
          </li>
          <li>
            <w3m-button />
          </li>
        </ul>
      </div>

      <div>
        <hr className='text-secondary' />
        <Link to="profile">
          <i className='bi bi-person fs-'></i>
          <span className='fs-5'>Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
