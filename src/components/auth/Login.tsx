import React, { useState } from 'react';
import { useUserContext } from '../../context/context';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setRole } = useUserContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica del login, como hacer una petición a tu API  
    console.log('Login', { email, password });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h3 className="text-center">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div className="mt-3">
            <button
              className="btn btn-secondary me-2"
              onClick={() => setRole('Student')}
            >
              Login as Student
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setRole('Instructor')}
            >
              Login as Instructor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
