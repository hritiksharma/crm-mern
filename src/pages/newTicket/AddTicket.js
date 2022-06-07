import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddTicketForm } from "../../components/addTicketForm/AddTicketForm";
import { BreadcrumbPage } from "../../components/breadcrumb/BreadcrumbPage";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  detail: "",
};

export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...initialFrmDt,
      [name]: value,
    });

    console.log("name ", name);
    console.log("value", value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Form submit request received");
  };
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page={"New Ticket"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            frmDt={frmData}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
