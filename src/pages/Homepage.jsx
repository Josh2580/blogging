import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
//
import Snippets from "../components/Snippets";
import RelatedPost from "../components/RelatedPost";
import PopularPost from "../components/PopularPost";
import NewPost from "../components/NewPost";
import HeroSection from "../components/HeroSection";
//
import {
  HomePageStyle,
  HomePageResponsiveStyle,
  SearchStyle,
} from "../styles/HomePageStyle";
import styled from "styled-components";
import { Card } from "../newStyles/Card";
import { Button } from "../newStyles/Button";
//
import { useGetAllPostsQuery } from "../features/Post/PostApi";
import ErrorPage from "../routes/ErrorPage";
import LoadingPage from "../routes/LoadingPage";
import { AllCard } from "../styles/SnippetStyle";
//SEARCHING
import { FaSearch } from "react-icons/fa";
import SearchComp from "../components/SearchComp";

const HomePage = () => {
  const [searchField, setSearchField] = useState("");
  const [isSearching, setIsSearching] = useState(true);

  const { data, error, isLoading } = useGetAllPostsQuery({ searchField });

  const pageSize = 4;
  const [myData, setMyData] = useState([]);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  const HandleChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  useEffect(() => {
    if (data === undefined) {
      // console.log("wait");
    } else {
      setMyData(data.slice(pagination.from, pagination.to));
      setPagination({ ...pagination, count: data.length });
    }
  }, [data, pagination.from, pagination.to]);

  useEffect(() => {
    if (searchField.length > 0) {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
  }, [searchField, data]);

  return (
    <HomePageStyle>
      {isLoading ? (
        <LoadingPage />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <>
          <HeroSection />
          <HomePageResponsiveStyle>
            <ForPost
              flexDirection="column"
              // background="white"
              // padding="1rem"
              // boxShadow="0px 0px 5px 5px #ececec"
              // margin="2px"
            >
              {/* {isSearching && <PopularPost />} */}

              <AllCard>
                {myData.map((blog) => (
                  <Snippets key={blog.id} post={blog} image={blog.image} />
                ))}
              </AllCard>
              <br />

              <Pagination
                count={Math.ceil(Number(pagination.count) / pageSize)}
                color="primary"
                size="small"
                onChange={HandleChange}
              />
            </ForPost>
            <ForPopular>
              <SearchComp />
              <PopularPost />
            </ForPopular>
            <NewPost />
          </HomePageResponsiveStyle>
        </>
      )}
    </HomePageStyle>
  );
};

const ForPost = styled(Card)``;

const ForPopular = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  right: 0px;
  bottom: 0px;
  /* height: 100vh; */
`;

export default HomePage;
