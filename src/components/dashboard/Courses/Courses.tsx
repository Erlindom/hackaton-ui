import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import coursesData from '../../../data/coursesData.json'; // Asegúrate de que esta ruta sea correcta

interface Course {
  id: number;
  title: string;
  description: string;
  author: string;
  price: string;
  image: string;
  link: string;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para la búsqueda
  const navigate = useNavigate(); // React Router's navigate function

  useEffect(() => {
    setCourses(coursesData as Course[]);
  }, []);

  // Filtra los cursos según el término de búsqueda
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="d-flex align-items-center">
        <i className='bi bi-search'></i>
        <input
          type="text"
          placeholder='Search course'
          className='p-2 ms-2 rounded-5 border-1 search border-0 bg-gray'
          value={searchTerm} // Conecta el valor del input con el estado
          onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado de búsqueda
        />
      </div>

      <div className="row mt-5 pt-2 bg-gray">
        <div>
          <p>Explore programming courses</p>
        </div>

        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <div className="col-md-4 mb-4 d-flex" style={{ width: 250 }} key={course.id}>
              <div className="card flex-fill">
                <img
                  className="card-img-top"
                  src={course.image}
                  alt={course.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ fontSize: 17 }}>{course.title}</h5>
                  <p className="card-text flex-grow-1" style={{ fontSize: 13 }}>{course.description}</p>
                  <p style={{ fontSize: 14 }}> <span className='fw-bold'> By </span> {course.author}</p>
                  <p>{course.price}</p>
                  <button 
                    className="btn btn-blue mt-auto"
                    onClick={() => navigate(`/course/detail`)} // Navega a la ruta estática sin id
                  >
                    Go somewhere
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No courses found.</p> // Mensaje si no hay cursos que coincidan con la búsqueda
        )}
      </div>
    </>
  );
};

export default Courses;
