import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported
import { useUserContext } from '../../../context/context';

const Profile: React.FC = () => {
  // Extract setRole from UserContext
  const { role, setRole } = useUserContext(); 
  const [user, setUser] = useState({
    name: 'Juan Pérez',
    age: 28,
    email: 'juan.perez@example.com',
    role: 'Estudiante' // Default role
  });

  // Extract initials from the name
  const getInitials = (name: string) => {
    const names = name.split(' ');
    return names.map(n => n[0]).join('');
  };

  // Handle logout
  const handleLogout = () => {
    // Add your logout logic here
    console.log('Cerrar sesión');
  };

  // Handle account deletion
  const handleDeleteAccount = () => {
    // Add your account deletion logic here
    console.log('Eliminar cuenta');
  };

  // Convert role to Instructor
  const handleBecomeInstructor = () => {
    setRole('Instructor'); // Use setRole to update the role in context
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center">
            <Card.Header as="h2">My profile</Card.Header>
            <Card.Body>
              <div className="d-flex flex-column align-items-center mb-3">
                {/* Profile picture */}
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: '#1e2343',
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
                <strong>Age:</strong> {user.age} años
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {user.email}
              </Card.Text>
              <Card.Text>
                <strong>Rol:</strong> {role} {/* Use the role from context */}
              </Card.Text>
              {role === 'Student' && (
                <Button className='btn-blue border-0' onClick={handleBecomeInstructor}>
                  Convertirse en Instructor
                </Button>
              )}
            </Card.Body>
            <Card.Footer>
              <Button variant="secondary" className="me-2" onClick={handleLogout}>
                Log out
              </Button>
              <Button variant="danger" onClick={handleDeleteAccount}>
                Delete account
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
