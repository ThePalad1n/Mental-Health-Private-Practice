import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBooking } from '../../actions/booking';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Fade from 'react-reveal/Fade';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Zoom from 'react-reveal/Zoom';

const BookingForm = ({ addBooking }) => {
  const [formData, setFormData] = useState({
    appointmentDate: '',
    appointmentTime: '',
    appointmentDuration: '',
    text: '',
  });

  const { appointmentDate, appointmentTime, appointmentDuration, text } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    addBooking({ appointmentDate, appointmentTime, appointmentDuration, text });
  };

  return (
    <>
      <Fade>

        <div className='Booking-form'>
          <Form onSubmit={onSubmit}>

            <Zoom cascade>

              <Col sm={12}>
                <Form.Group as={Row} controlId='appointmentDate'>
                  <Form.Label column sm={10}>
                    Appointment Date:
                </Form.Label>
                  <Form.Control
                    name='appointmentDate'
                    value={appointmentDate}
                    onChange={onChange}
                    type='Date'
                    required
                  />
                </Form.Group>
              </Col>

              <Col sm={12}>
                <Form.Group as={Row} controlId='appointmentTime'>
                  <Form.Label column sm={3}>
                    Appointment Time:
                </Form.Label>
                  <Form.Control
                    name='appointmentTime'
                    value={appointmentTime}
                    onChange={onChange}
                    type='Time'
                    required
                  />
                </Form.Group>
              </Col>

              <Col sm={12}>
                <Form.Group as={Row} controlId='appointmentDuration'>
                  <Form.Label column sm={3}>
                    Appointment Duration:
                </Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="45 minutes"
                    name='appointmentDuration'
                    value={appointmentDuration}
                    onChange={onChange}
                    type='Time'
                    required>
                    <option></option>
                    <option>30 minutes</option>
                    <option>45 minutes</option>
                    <option>1 hour</option>
                    <option>1 hour 30 minutes</option>
                    <option>2 hours</option>
                  </Form.Control>

                </Form.Group>
              </Col>

              <Col sm={12}>
                <Form.Group as={Row} controlId='text'>
                  <Form.Label column sm={2}>
                    Comment:
                </Form.Label>
                  <Form.Control
                    name='text'
                    value={text}
                    placeholder='Id like to discuss...'
                    onChange={onChange}
                    type='text'
                    required
                  />
                </Form.Group>
              </Col>

              <Button id="appointment-button1" name='submit' variant='dark' type='submit' value='Submit'>
                Submit
            </Button>

            </Zoom>

          </Form>
        </div>

      </Fade>

    </>

  );

};

BookingForm.propTypes = {
  addBooking: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(null, { addBooking })(BookingForm);
