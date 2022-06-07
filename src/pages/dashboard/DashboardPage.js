import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { TicketTable } from "../../components/ticketTable/TicketTable";
import tickets from "../../assets/data/dummytickets.json";
import { BreadcrumbPage } from "../../components/breadcrumb/BreadcrumbPage";
export const DashboardPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <BreadcrumbPage page={"Dashboard"} />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5 mb-2">
            <Button
              variant="info"
              style={{
                fontSize: "2rem",
                padding: "10px 30px",
                color: "#fff",
              }}
            >
              Add New Ticket
            </Button>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mb-2">
            <div>Total tickets: 50</div>
            <div>Pending tickets: 5</div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">
            <div>Recently Added tickets</div>
          </Col>
        </Row>
        <Row>
          <Col className="recent-ticket">
            <TicketTable tickets={tickets} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
