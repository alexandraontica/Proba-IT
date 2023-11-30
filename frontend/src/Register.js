import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Register.css';

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="RegisterButton" variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keybord={false}>
        <Modal.Header className="body" closeButton/>
        <Modal.Body className="body">
        <Modal.Title>Register</Modal.Title>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder="Password"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder="Confirm password"
                autoFocus
              />
            </Form.Group>
          </Form>
          <Button className="lastButton" variant="primary">Register</Button>
        </Modal.Body>
        </Modal>
    </>
  );
}
