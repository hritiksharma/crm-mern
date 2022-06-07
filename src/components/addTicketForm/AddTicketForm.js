import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./addTicketForm.css";
import PropTypes from "prop-types";

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt }) => {
  console.log(frmDt);
  return (
    <div className="jumbotron">
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row} style={{ marginBottom: "8px" }}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              // type="email"
              placeholder="Enter subject"
              name="subject"
              value={frmDt.subject}
              onChange={(e) => handleOnChange(e)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} style={{ marginBottom: "8px" }}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="issuedate"
              type="date"
              value={frmDt.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginBottom: "8px" }}>
          <Form.Label column sm={3}>
            Details
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              name="detail"
              rows="5"
              value={frmDt.detail}
              onChange={(e) => handleOnChange(e)}
              required
            />
          </Col>
        </Form.Group>

        <Button variant="info" type="submit" block style={{ width: "100%" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.func.isRequired,
};
