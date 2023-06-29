import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "../newStyles/Card";
import { Button } from "../newStyles/Button";

const SearchComp = () => {
  const [searchField, setSearchField] = useState("");
  return (
    <Searching
      flexDirection="column"
      background="white"
      padding="1rem"
      boxShadow="0px 0px 5px 5px #ececec"
      margin="2px"
    >
      <h3>SEARCH</h3>
      <SearchForm>
        <input
          type="text"
          placeholder="Search All Content Here"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
        <Button width="fit-content" borderRadius="none">
          Search
        </Button>
        {/* <FaSearch className="font" /> */}
      </SearchForm>
    </Searching>
  );
};

const Searching = styled(Card)`
  gap: 16px;
  h3 {
    color: #444444;
    border-bottom: 1px solid #b9b9b9;
    padding-bottom: 4px;
    /* width: fit-content; */
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  input {
    background: none;
    font-size: 16px;
    border: 1px solid #777777;
    padding: 7px;
    &:focus {
      outline: none;
    }
  }
  .font {
    color: #634b78;
  }
`;

export default SearchComp;
