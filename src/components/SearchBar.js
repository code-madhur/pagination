import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useDebounce from '../hooks/useDebounce';
import { actions as searchActions } from "../redux/modules/searchResults";
import { Row, Col, FormControl } from "react-bootstrap";

const SearchBar = ({placeholder, searchAction}) => {
  const [keyword, setKeyword] = useState("");

  // Debounce by 300milliseconds.
  const newSearch = useDebounce(newKeyword => {
    searchAction(newKeyword);
  }, 300);

  const onChangeHandler = (e) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
    newSearch(newKeyword);
  }

  return (
    <Row>
      <Col>
        <FormControl
          type="text"
          value={keyword}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </Col>
    </Row>
  );
};

export default SearchBar;
