import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const ResetPassword = ({
  handleOnChange,
  email,
  handleOnResetSubmit,
  formSwitcher,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Reset Password</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Reset Password
              </Button>
            </Form>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#!" onClick={() => formSwitcher("login")}>
              Login Now
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
