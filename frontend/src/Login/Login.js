import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Login.css';
import { Formik, Field, Form } from 'formik';

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="LoginButton" variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keybord={false}>
        <Modal.Header className="body" closeButton/>
        <Modal.Body className="body">
        <Modal.Title>Login</Modal.Title>
        <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Field id="email"
          name="email"
          placeholder="Email"
          type="email"
          className="field"/>

        <Field id="password" 
        name="password" 
        placeholder="Password" 
        type="password"
        className="field" />
        </Form>
    </Formik>
          <Button className="lastButton" variant="primary" onClick={handleClose}>Login</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
