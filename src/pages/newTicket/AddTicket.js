import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddTicketForm } from "../../components/addTicketForm/AddTicketForm";
import { BreadcrumbPage } from "../../components/breadcrumb/BreadcrumbPage";

export const AddTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page={"New Ticket"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
};
