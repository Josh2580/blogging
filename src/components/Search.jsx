import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { useGetAllPostsQuery } from "../features/Post/PostApi";

const Search = () => {
  const [searchField, setSearchField] = useState("");
  const [submit, setSubmit] = useState("");
  const location = useLocation();

  const { data, error, isLoading } = useGetAllPostsQuery(submit);

  console.log(searchField);

  const SearchHandler = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
    setSubmit("");
  };

  const SubmitHandler = (e) => {
    // e.preventDefault();
    setSubmit(searchField);
  };

  console.log(submit);

  useEffect(() => {
    SubmitHandler();
  }, [submit]);

  return (
    <div>
      <SearchForm onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="Search Here"
          value={searchField}
          onChange={SearchHandler}
        />
        <FaSearch className="font" />
      </SearchForm>
    </div>
  );
};

const SearchForm = styled.form`
  background-color: #e9e9e9;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  width: 200px;
  input {
    background: none;
    font-size: 16px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  .font {
    color: #634b78;
  }
`;

export default Search;
