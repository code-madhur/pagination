import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions as searchActions } from "../redux/modules/searchResults";
import SearchBar from "./SearchBar";

const SearchCampaigns = ({placeholder, searchAction}) => {
  const dispatch = useDispatch();
  const newSearch = keyword => dispatch(searchActions.newSearch(keyword));

  return (
    <>
      <h3 className='text-center'>Search Campaigns</h3>
      <SearchBar placeholder='Campaign Name' searchAction={newSearch} />
    </>
  );
};

export default SearchCampaigns;
