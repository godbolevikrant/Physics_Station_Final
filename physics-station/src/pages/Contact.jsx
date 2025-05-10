import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="py-5">
      <Container>
        <h2 className="text-center mb-4 section-title">Contact Us</h2>
        <Row>
          {/* Contact Form */}
          <Col md={6} className="mb-4">
            <Form className=''>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" required placeholder='Enter your name' />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required placeholder='Enter your email' />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} required placeholder='Type your message here...'/>
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>

          {/* Contact Info */}
          <Col md={6}>
            <h4>Get in Touch</h4>
            <p>
              <FaPhone /> (+91) 7498289182
              <br />
              <FaEnvelope /> physicsstation@gmail.com
            </p>
            <h4>Visit Us</h4>
            <p>Ambajogai Road, Infront of Hotel Pahunchar, Latur -413512</p>
            
          </Col>
          <Col md={12}>
            <h4 className='section-title mt-5 mb-4'>Location</h4>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.3982784369587!2d76.56850227596956!3d18.420217172230515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83788bf95f5b%3A0xa8b13ce5c3e5dd8e!2sPahunchar%20Pure%20Veg%20Restaurant!5e0!3m2!1sen!2sin!4v1746515235339!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Col >
        </Row>
      </Container>
    </div>
  );
}

export default Contact;