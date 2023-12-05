import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CreatePoll.css';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

export default function CreatePoll() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="CreateButton" variant="primary" onClick={handleShow}>
        Create poll
      </Button>

      <Modal className="create-poll-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton className="body" />
        <Modal.Body className="body">
          <Modal.Title>Create a Poll</Modal.Title>
          <Formik
            initialValues={{
              question: '',
              option1: '',
              option2: '',
              option3: '',
            }}
            onSubmit={async (values) => {
              const ret = await axios.post('http://localhost:5000/api/poll', {
                question: values.question,
                option1: values.option1,
                option2: values.option2,
                option3: values.option3,
              });
              console.log(ret);

              handleClose();
            }}
          >
            {({ handleSubmit }) =>
              <Form className="form">
                <Field
                  name="question"
                  placeholder="Type your question here"
                  className="field-create"
                />

                <Field
                  name="option1"
                  placeholder="Option 1"
                  type="text"
                  className="field-create"
                />
                <Field
                  name="option2"
                  placeholder="Option 2"
                  type="text"
                  className="field-create"
                />
                <Field
                  name="option3"
                  placeholder="Option 3"
                  type="text"
                  className="field-create"
                />

                <Button className="lastButton" onClick={handleSubmit}>
                  Create Poll
                </Button>
              </Form>
            }

          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}