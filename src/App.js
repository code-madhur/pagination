import React from "react";
import "./styles.min.css";
import PaginatedView from "./components/PaginatedView";
import SearchCampaigns from "./components/SearchCampaigns";

import { Col, Container, Row } from "react-bootstrap";

export default function App() {
  return (
    <Container >
      <Row className='mb-5'>
        <Col>
          <SearchCampaigns />
        </Col>
      </Row>
      <Row>
        <Col>
          <PaginatedView />
        </Col>
      </Row>
    </Container>
  );
};
