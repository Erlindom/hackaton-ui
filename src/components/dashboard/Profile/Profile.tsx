import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap importado

const Profile: React.FC = () => {
  // Datos de ejemplo, puedes reemplazarlos con datos reales si los tienes en el estado o en props
  const [user, setUser] = useState({
    name: 'Juan Pérez',
    age: 28,
    email: 'juan.perez@example.com',
    role: 'Estudiante' // Rol por defecto
  });

  // Extraer las iniciales del nombre
  const getInitials = (name: string) => {
    const names = name.split(' ');
    return names.map(n => n[0]).join('');
  };

  // Función de cierre de sesión, puede ser reemplazada con la lógica real
  const handleLogout = () => {
    // Aquí iría la lógica para cerrar sesión
    console.log('Cerrar sesión');
  };

  // Función para eliminar la cuenta, puede ser reemplazada con la lógica real
  const handleDeleteAccount = () => {
    // Aquí iría la lógica para eliminar la cuenta
    console.log('Eliminar cuenta');
  };

  // Función para convertir el rol a Instructor
  const handleBecomeInstructor = () => {
    setUser(prevState => ({
      ...prevState,
      role: 'Instructor'
    }));
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center">
            <Card.Header as="h2">Perfil de Usuario</Card.Header>
            <Card.Body>
              <div className="d-flex flex-column align-items-center mb-3">
                {/* Foto de perfil */}
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: '#e57373',
                    color: '#fff',
                    fontSize: '36px',
                    fontWeight: 'bold'
                  }}
                >
                  {getInitials(user.name)}
                </div>
                <Card.Title className="mt-3">{user.name}</Card.Title>
              </div>
              <Card.Text>
                <strong>Edad:</strong> {user.age} años
              </Card.Text>
              <Card.Text>
                <strong>Correo:</strong> {user.email}
              </Card.Text>
              <Card.Text>
                <strong>Rol:</strong> {user.role}
              </Card.Text>
              {user.role === 'Estudiante' && (
                <Button variant="primary" onClick={handleBecomeInstructor}>
                  Convertirse en Instructor
                </Button>
              )}
            </Card.Body>
            <Card.Footer>
              <Button variant="secondary" className="me-2" onClick={handleLogout}>
                Cerrar sesión
              </Button>
              <Button variant="danger" onClick={handleDeleteAccount}>
                Eliminar cuenta
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
