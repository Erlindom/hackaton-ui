// CourseDetail.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Comment {
  author: string;
  text: string;
}

const CourseDetail: React.FC = () => {
  const navigate = useNavigate(); // Para navegar de vuelta a la página anterior

  // Estado para manejar la unidad seleccionada y su video correspondiente
  const [selectedUnit, setSelectedUnit] = useState<string>('Unit 1: Introduction');
  const [videoUrl, setVideoUrl] = useState<string>('https://www.youtube.com/embed/dQw4w9WgXcQ'); // Video por defecto

  // Estado para manejar likes
  const [likes, setLikes] = useState<number>(34); // Número de likes inicial
  const [liked, setLiked] = useState<boolean>(false); // Si el usuario ha dado like o no

  // Estado para manejar comentarios
  const [comments, setComments] = useState<Comment[]>([
    { author: 'John Doe', text: 'Great course! Really enjoyed it.' },
    { author: 'Jane Smith', text: 'The lessons were very detailed and easy to follow.' }
  ]);
  const [newComment, setNewComment] = useState<string>(''); // Estado para el nuevo comentario

  // Estado para manejar la completación de las unidades
  const [completedUnits, setCompletedUnits] = useState<Set<string>>(new Set()); // Un conjunto para almacenar las unidades completadas

  // Datos de las unidades del curso con sus URLs de video
  const courseUnits = [
    { unit: 'Unit 1: Introduction', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { unit: 'Unit 2: Intermediate Topics', video: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' },
    { unit: 'Unit 3: Advanced Techniques', video: 'https://www.youtube.com/embed/V-_O7nl0Ii0' },
  ];

  // Manejador para cambiar de video cuando el usuario selecciona una unidad
  const handleUnitClick = (unit: string, video: string) => {
    setSelectedUnit(unit);
    setVideoUrl(video);
  };

  // Manejador de likes
  const handleLikeClick = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked); // Cambia el estado del like
  };

  // Manejador para agregar un nuevo comentario
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    if (newComment.trim()) {
      setComments([...comments, { author: 'Anonymous', text: newComment }]);
      setNewComment(''); // Limpia el campo de comentario
    }
  };

  // Manejador para marcar una unidad como completada
  const handleMarkAsCompleted = (unit: string) => {
    setCompletedUnits(new Set(completedUnits.add(unit))); // Agrega la unidad al conjunto de completadas
  };

  // Verifica si todas las unidades están completas
  const allUnitsCompleted = courseUnits.every(unit => completedUnits.has(unit.unit));

  return (
    <div className="container mt-5">
      <button onClick={() => navigate('/courses')} className="btn btn-secondary mb-4">Back to Courses</button>

      <div className="row">
        <div className="col-md-8">
          {/* Simulación del video */}
          <div className="embed-responsive embed-responsive-16by9 mb-4">
            <iframe
              className="embed-responsive-item"
              src={videoUrl} // Cambia el video de acuerdo a la unidad seleccionada
              allowFullScreen
              title="Course Video"
              style={{ width: '100%', height: '400px', borderRadius: '10px' }}
            ></iframe>
          </div>

          {/* Detalles del curso */}
          <h3>{selectedUnit}</h3>
          <p>This is a detailed description of the selected unit. You can add more information here about {selectedUnit}.</p>
          <p><strong>Author:</strong> Course Author</p>

          {/* Likes y comentarios */}
          <div className="d-flex align-items-center mb-3">
            <button
              className={`btn ${liked ? 'btn-danger' : 'btn-primary'} me-3`}
              onClick={handleLikeClick}
            >
              {liked ? 'Unlike' : 'Like'}
            </button>
            <span className="me-3">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
          </div>

          <div className="comments-section mb-5">
            <h5>Comments</h5>

            {/* Formulario para agregar comentarios */}
            <form onSubmit={handleAddComment} className="mb-4">
              <div className="form-group mb-3">
                <label htmlFor="comment">Add a Comment</label>
                <textarea
                  id="comment"
                  className="form-control"
                  rows={3}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write your comment here..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>

            {/* Listado de comentarios */}
            <ul className="list-unstyled">
              {comments.map((comment, index) => (
                <li key={index} className="mb-3 p-3 border rounded d-flex">
                  {/* Simulación de una imagen de perfil */}
                  <div className="me-3">
                    <img
                      src={`https://i.pravatar.cc/50?img=${index + 1}`}
                      alt="User avatar"
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div>
                    <strong>{comment.author}</strong>
                    <p>{comment.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-4">
          {/* Simulación de unidades del curso */}
          <h5>Course Units</h5>
          <ul className="list-group">
            {courseUnits.map((unit) => (
              <li
                key={unit.unit}
                className={`list-group-item ${selectedUnit === unit.unit ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={() => handleUnitClick(unit.unit, unit.video)} // Cambia de video al hacer clic
              >
                {unit.unit}
                {/* Botón para marcar como completado */}
                {!completedUnits.has(unit.unit) && (
                  <button
                    className="btn btn-outline-success btn-sm float-end"
                    onClick={() => handleMarkAsCompleted(unit.unit)}
                  >
                    Mark as Completed
                  </button>
                )}
                {/* Mostrar un "check" cuando la unidad esté completada */}
                {completedUnits.has(unit.unit) && (
                  <span className="float-end text-success fs-5 ms-2">✓</span>
                )}
              </li>
            ))}
          </ul>

          {/* Botón para generar el certificado */}
          {allUnitsCompleted && (
            <div className="mt-4">
              <h5>Congratulations!</h5>
              <button 
                className="btn btn-success btn-block"
                onClick={() => navigate('/certificate', { state: { courseName: selectedUnit, studentName: 'John Doe', completionDate: new Date().toLocaleDateString() } })}
                >
                Generate Certificate
                </button>
            </div>
          )}

          {/* Simulación de compra del curso */}
          <div className="mt-4">
            <h5>Price: $50</h5>
            <a href="#" className="btn btn-success btn-block">Buy Course</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
