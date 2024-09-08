import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from './components/dashboard/Courses/Courses';
import MyCourses from './components/dashboard/InstructorCourses/MyCourses';
import LearningProgress from './components/dashboard/Courses/LearningProgress';
import Profile from './components/dashboard/Profile/Profile';
import CreateCourse from './components/dashboard/InstructorCourses/CreateCourse';
import CourseDetail from './components/dashboard/Courses/CourseDetails';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import MainLayout from './MainLayout';
import Certificate from './components/certificate/certificate';
import Wallet from './components/auth/Wallet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas de autenticación */}
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas protegidas con layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Courses />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/my-courses' element={<MyCourses />} />
          <Route path='/learning-progress' element={<LearningProgress />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-course' element={<CreateCourse />} />
          <Route path="/course/detail" element={<CourseDetail />} />
          <Route path="/certificate" element={<Certificate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
