import React from "react";
import { Table } from "react-bootstrap";

export const TicketTable = ({ tickets }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>ssl issues</td>
              <td>{data.status}</td>
              <td>{data.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-center" colSpan="4">
              No Tickets to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
