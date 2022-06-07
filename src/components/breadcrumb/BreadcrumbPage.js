import React from "react";
import { Breadcrumb } from "react-bootstrap";

export const BreadcrumbPage = ({ page }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
