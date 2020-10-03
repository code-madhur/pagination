import React from "react";
import { Row, Col } from "react-bootstrap";

const CampaignRow = ({campaign}) => {
  return (
    <Row className='border pt-2 pb-2'>
      <Col xs={3}>
        {campaign.name}
      </Col>
      <Col xs={5}>
        {campaign.type}
      </Col>
      <Col xs={4}>
        {campaign.company}
      </Col>
    </Row>
  );
};

export default CampaignRow;
