import React, { useEffect, useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap importado
import { createCourse } from '../../../services/contractServices';
import Web3 from 'web3';

const CreateCourse: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState<string | ''>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [userAddress, setUserAddress] = useState<string>('');

  useEffect(() => {
    const getUserAddress = async () => {
      if (window.ethereum) {
        try {
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          if (accounts.length > 0) {
            setUserAddress(accounts[0]);
          } else {
            console.error('No accounts found');
          }
        } catch (error) {
          console.error('Failed to get user address:', error);
        }
      } else {
        console.error('Ethereum provider not found');
      }
    };

    getUserAddress();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setUrl: React.Dispatch<React.SetStateAction<string | null>>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUrl(url);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const courseData = {
      name,
      description,
      category,
      price,
      img: imageUrl || '', // You might need to upload the image and use the URL from a server
      video: videoUrl || '', // Similarly, handle video URL as needed
      userAddress
    };

    try {
      await createCourse(courseData);
      alert('Course created successfully!');
    } catch (error) {
      console.error('Error creating course:', error);
      alert('Failed to create course.');
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Create course</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-4">
          <Col md={6}>
            <Form.Group controlId="courseName">
              <Form.Label>Course name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Course name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="coursePrice">
              <Form.Label>Course price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Course price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4" controlId="courseDescription">
          <Form.Label>Course description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Course description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="courseCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select category</option>
            <option value="Mastering">Mastering</option>
            <option value="Software Development">Software Development</option>
            <option value="Sales">Sales</option>
            <option value="Education">Education</option>
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
                  alt="Course preview"
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

        <Button className="w-100" variant="primary" size="lg" type="submit">Create Course</Button>
      </Form>
    </Container>
  );
};

export default CreateCourse;
