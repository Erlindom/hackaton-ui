import React, { useState, useEffect } from 'react';
import coursesData from '../../../data/coursesData.json'; // Asegúrate de que esta ruta sea correcta

interface Course {
  id: number;
  title: string;
  description: string;
  author: string;
  price: string;
  image: string;
  link: string;
  progress: number; // Field to represent course progress percentage
}

const LearningProgress: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Set courses from JSON and add a progress field dynamically
    const coursesWithProgress = (coursesData as Omit<Course, 'progress'>[]).map(course => ({
      ...course,
      progress: Math.floor(Math.random() * 100), // Simulate random progress percentage for each course
    }));
    setCourses(coursesWithProgress);
  }, []);

  return (
    <>
      <div className="row mt-5 pt-2 bg-gray">
        <div>
          <p>Your Learning Progress</p>
        </div>

        {courses.length > 0 ? (
          courses.map(course => (
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
                  
                  {/* Progress Bar */}
                  <div className="progress mt-auto" style={{ height: '25px' }}>
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: `${course.progress}%` }}
                      aria-valuenow={course.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      {course.progress}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    </>
  );
};

export default LearningProgress;
