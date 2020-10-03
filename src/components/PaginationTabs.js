import React from "react";
import { Row, Col, Pagination } from "react-bootstrap";

const PaginationTabs = ({length, onClickHandler, currentPage}) => {
  return (
    <Row>
      <Col className='d-flex justify-content-center'>
        <Pagination className='text-center'>
          {[...Array(length)].map((page, index) => {
            const active = index + 1 === currentPage;
            return (<Pagination.Item active={active} onClick={() => onClickHandler(index + 1)} >{index + 1}</Pagination.Item>);
          })}
        </Pagination>
      </Col>
    </Row>
  );
};

export default PaginationTabs;
