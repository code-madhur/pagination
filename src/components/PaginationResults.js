import React from "react";
import { Row, Col } from "react-bootstrap";
import CampaignRow from './CampaignRow';

const PaginationResults = ({displayResults, count}) => {
  return (
    <Row className='flex-grow-1'>
      <Col>
        <h5 className='text-center'>Total Result: {count}</h5>
        {displayResults.map((campaign) => <CampaignRow campaign={campaign} />)}
      </Col>
    </Row>
  );
};

export default PaginationResults;
