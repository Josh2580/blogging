import React, { useState, useEffect } from "react";
import Snippets from "./Snippets";
import { usePopularPostsQuery } from "../features/Post/PostApi";
import { AllCard } from "../styles/SnippetStyle";
import LoadingPage from "../routes/LoadingPage";
import styled from "styled-components";
import { Card } from "../newStyles/Card";
import { ImageCard } from "../newStyles/Image";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

const PopularPost = () => {
  const navigate = useNavigate();
  const pageSize = 6;
  const { data, error, isLoading } = usePopularPostsQuery();
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
        <Popul
          flexDirection="column"
          background="white"
          padding="1rem"
          boxShadow="0px 0px 5px 5px #ececec"
          margin="2px"
        >
          <h3>Most Popular</h3>
          <br />
          <Pop>
            {myData.map((blog) => (
              <Card
                key={blog.id}
                gap="1rem"
                alignItems="center"
                // background="white"
                // boxShadow="0px 0px 5px 5px #ececec"
                // margin="2px"
                onClick={() =>
                  navigate(`/blog/details/${blog.id}/${blog.category}`)
                }
              >
                <Card flex="1">
                  <ImageCard
                    src={blog.image}
                    height="70px"
                    borderRadius="5px"
                  />
                </Card>
                <Card flex="3" flexDirection="column" padding="10px">
                  <h4>
                    {blog.title.length > 20
                      ? `${blog.title.substring(0, 20)}...`
                      : blog.title}
                  </h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${
                        blog.body.length > 35
                          ? `${blog.body.substring(0, 35)}...`
                          : blog.body
                      }`,
                    }}
                  >
                    {/* {blog.body.length > 30
                      ? `${blog.body.substring(0, 30)}...`
                      : blog.body} */}
                  </p>
                </Card>
              </Card>
              // </div>
            ))}
          </Pop>
        </Popul>
      )}
    </div>
  );
};

const Pop = styled(AllCard)`
  background: white;

  p {
    font-size: 14px;
    color: #777777;
  }
`;

const Popul = styled(Card)`
  h3 {
    color: #444444;
    border-bottom: 1px solid #b9b9b9;
    padding-bottom: 8px;
  }
`;

export default PopularPost;
