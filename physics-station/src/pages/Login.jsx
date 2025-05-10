import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || (!isLogin && (!formData.confirmPassword || !formData.fullName))) {
      setError('Please fill in all fields');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Invalid email format');
      return;
    }
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    console.log(isLogin ? 'Login submitted:' : 'Signup submitted:', formData);
    
  };

  const toggleForm = () => {
    setError('');
    setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
    setIsLogin(!isLogin);
  };

  return (
    <div className="py-5 text-start">
      <Container className="mx-auto" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4 section-title">{isLogin ? 'Login' : 'Sign Up'}</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          {!isLogin && (
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder='Enter your full name'
                required
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter your password'
              required
            />
          </Form.Group>

          {!isLogin && (
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                placeholder='Confirm your password'
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}

          {isLogin && (
            <div className="d-flex justify-content-between mb-3">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          )}

          <Button variant="primary" type="submit" className="w-100 mb-3">
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </Form>

        {isLogin && (
          <>
            <div className="text-center mb-3">
              <span>Or login with</span>
            </div>
            <div className="d-flex justify-content-center gap-4 mb-4">
              <div style={{ cursor: 'pointer' }} onClick={() => console.log('Google login')}>
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google Login"
                  width="40"
                  height="40"
                  title="Login with Google"
                />
              </div>
              <div style={{ cursor: 'pointer' }} onClick={() => console.log('Facebook login')}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook Login"
                  width="40"
                  height="40"
                  title="Login with Facebook"
                />
              </div>
            </div>
          </>
        )}

        <div className="text-center">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <span onClick={toggleForm} style={{ color: 'blue', cursor: 'pointer' }}>
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span onClick={toggleForm} style={{ color: 'blue', cursor: 'pointer' }}>
                Login
              </span>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Login;
