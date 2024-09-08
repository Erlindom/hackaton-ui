// Certificate.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface CertificateProps {
  courseName: string;
  studentName: string;
  completionDate: string;
}

const Certificate: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Para la navegación
  const { courseName = 'Default Course', studentName = 'Default Student', completionDate = new Date().toLocaleDateString() } = location.state as CertificateProps || {};

  return (
    <div className="certificate-container">
      <button 
        onClick={() => navigate(-1)} // Regresa a la página anterior
        className="btn btn-secondary mb-4"
      >
        Back
      </button>
      <div className="certificate">
        <h1>Certificate of Completion</h1>
        <div className="certificate-body">
          <p><strong>Course:</strong> {courseName}</p>
          <p><strong>Student:</strong> {studentName}</p>
          <p><strong>Date:</strong> {completionDate}</p>
        </div>
        <div className="certificate-footer">
          <p>Congratulations on completing the course!</p>
          {/* Puedes agregar una firma o logotipo aquí */}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
