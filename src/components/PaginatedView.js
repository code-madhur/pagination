import React, {useEffect} from "react";
import usePagination from "../hooks/usePagination";
import { Row, Col } from "react-bootstrap";
import PaginationTabs from './PaginationTabs';
import PaginationResults from './PaginationResults';

const PaginatedView = () => {
  const [setPage, displayResults, currentPage, maxPage, count] = usePagination(10);
  
  useEffect(() => setPage(1), []);

  const paginationClickHandler = page => {
    console.log(page);
    if (page === currentPage) {
      return;
    };

    setPage(page);
  } 

  return (
    <Row>
      <Col className='d-flex flex-column' style={{height: '35em'}}>
        <PaginationResults displayResults={displayResults} count={count} />
        <PaginationTabs length={maxPage} currentPage={currentPage} onClickHandler={paginationClickHandler} />
      </Col>
    </Row>
  );
};

export default PaginatedView;
