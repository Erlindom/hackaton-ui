import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap importado

const CreateCourse: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setUrl: React.Dispatch<React.SetStateAction<string | null>>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUrl(url);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Create course</h2>
      <Form>
        <Row className="mb-4">
          <Col md={6}>
            <Form.Group controlId="courseName">
              <Form.Label>Course name</Form.Label>
              <Form.Control type="text" placeholder="Course name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="coursePrice">
              <Form.Label>Course price</Form.Label>
              <Form.Control type="text" placeholder="Course price" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4" controlId="courseDescription">
          <Form.Label>Course description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Course description  " />
        </Form.Group>

        <Form.Group className="mb-4" controlId="courseCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select">
            <option value="">Mastering</option>
            <option value="">Software Development</option>
            <option value="">Sales</option>
            <option value="">Education</option>
          </Form.Control>
        </Form.Group>

        <Row className="mb-4">
          <Col md={6}>
            <Form.Group controlId="courseImage">
              <Form.Label>Course image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(event) => handleFileChange(event as React.ChangeEvent<HTMLInputElement>, setImageUrl)}
              />
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Imagen del curso"
                  style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                  className="img-fluid"
                />
              )}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="courseVideo">
              <Form.Label>Course video</Form.Label>
              <Form.Control
                type="file"
                accept="video/*"
                onChange={(event) => handleFileChange(event as React.ChangeEvent<HTMLInputElement>, setVideoUrl)}
              />
              {videoUrl && (
                <video
                  controls
                  src={videoUrl}
                  style={{ maxWidth: '100%', marginTop: '10px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                  className="img-fluid"
                />
              )}
            </Form.Group>
          </Col>
        </Row>

        <Button className="w-100" variant="primary" size="lg">Crear curso</Button>
      </Form>
    </Container>
  );
};

export default CreateCourse;
