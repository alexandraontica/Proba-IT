import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

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
          placeholder=" Email"
          type="email"
          className="field"/>

        <Field id="password" 
        name="password" 
        placeholder=" Password" 
        type="password"
        className="field" />

        <Field
          id="password"
          name="password"
          placeholder=" Confirm password"
          type="password"
          className="field"
        />
        </Form>
    </Formik>
          <Button className="lastButton" onClick={handleClose}>Create account</Button>
        </Modal.Body>
        </Modal>
    </>
  );
}
