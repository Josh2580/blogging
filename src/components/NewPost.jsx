import React, { useState, useEffect } from "react";
import Snippets from "./Snippets";
import { useNewPostsQuery } from "../features/Post/PostApi";
import { AllCard } from "../styles/SnippetStyle";
import { Card } from "../newStyles/Card";
import styled from "styled-components";
import LoadingPage from "../routes/LoadingPage";
import Pagination from "@mui/material/Pagination";

const NewPost = () => {
  const pageSize = 3;
  const { data, error, isLoading } = useNewPostsQuery();
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
    if (data == undefined) {
      // console.log("wait");
    } else {
      setMyData(data.slice(pagination.from, pagination.to));
      setPagination({ ...pagination, count: data.length });
    }
  }, [data, pagination.from, pagination.to]);

  // console.log(pagination.count);
  // console.log(myData);

  return (
    <div>
      {error ? (
        console.log("error")
      ) : isLoading ? (
        <LoadingPage />
      ) : (
        <NewP
          flexDirection="column"
          // background="white"
          // padding="1rem"
          // boxShadow="0px 0px 5px 5px #ececec"
          // margin="2px"
        >
          <h3>Recent Post</h3>

          <AllCard>
            {myData.map((blog) => (
              <Snippets key={blog.id} post={blog} image={blog.image} />
            ))}
            {/* <Pagination
            count={Math.ceil(pagination.count / pageSize)}
            color="primary"
            size="small"
            onChange={HandleChange}
          /> */}
          </AllCard>
        </NewP>
      )}
    </div>
  );
};

const NewP = styled(Card)`
  gap: 16px;
  h3 {
    color: #444444;
    border-bottom: 1px solid #b9b9b9;
    padding-bottom: 8px;
    width: 50%;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;

export default NewPost;
