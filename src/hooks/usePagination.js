import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default (resultsPerPage = 10) => {
  const results = useSelector((state) => state.searchResults);

  useEffect(() => {
    setPage(1);
  }, [results]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [displayResults, setDisplayResults] = useState([]);

  const maxPage = Math.ceil(results.length / resultsPerPage);

  const setPage = (page) => {
    const newPage = Math.min(Math.max(1, page), maxPage);

    setCurrentPage(newPage);
    const begin = (newPage - 1) * resultsPerPage;
    const end = begin + resultsPerPage;
    setDisplayResults(results.slice(begin, end));
  };

  return [setPage, displayResults, currentPage, maxPage, results.length];
};
