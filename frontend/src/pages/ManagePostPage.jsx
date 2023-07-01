import React, { useState, useEffect } from "react";
import {
  useGetAllPostsQuery,
  useGetMyPostQuery,
  useDeletePostMutation,
} from "../features/Post/PostApi";
import { ManageCatStyle } from "../styles/ManageCategoryPageStyle";
import LoadingPage from "../routes/LoadingPage";
import ErrorPage from "../routes/ErrorPage";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// import { useSelector } from "react-redux";
// import CreatePost from "../components/CreatePost";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { Card } from "../newStyles/Card";
import { ImageCard } from "../newStyles/Image";

import { AllCard } from "../styles/SnippetStyle";

const ManagePostPage = () => {
  const navigate = useNavigate();
  // const { error, isLoading } = useGetAllPostsQuery();

  // const [deletePost] = useDeletePostMutation();

  const [id, setId] = useState("");

  const userInfo = useSelector((state) =>
    state.auth.userInfo ? state.auth.userInfo : ""
  );
  const { data: userData } = userInfo;

  // const { id } = userInfo.data;

  const { data, error, isLoading } = useGetMyPostQuery(id);

  const pageSize = 18;
  // const { data, error, isLoading } = usePopularPostsQuery();
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
    if (userData === undefined) {
      navigate("/");
    } else {
      setId(userData.id);
    }
  }, []);

  useEffect(() => {
    if (data == undefined) {
      // console.log("wait");
    } else {
      setMyData(data.slice(pagination.from, pagination.to));
      setPagination({ ...pagination, count: data.length });
    }
  }, [data, pagination.from, pagination.to]);

  // console.log(id);
  // console.log(userInfo.data);

  // const DeleteHandler = ({ id }) => {
  //   const result = window.confirm("Do you confirm to delete this Post?");
  //   result ? deleteFunction(id) : console.log("No Clicked");
  // };

  // const deleteFunction = (id) => {
  //   deletePost(id);
  //   console.log(`You Deleted this ID =${id}`);
  // };

  return (
    <>
      <div>
        {error ? (
          console.log("error")
        ) : isLoading ? (
          <LoadingPage />
        ) : (
          <div>
            <h2>Manage My Blog</h2>

            <br />
            <Pop>
              {myData.map((blog) => (
                <Card
                  key={blog.id}
                  gap="1rem"
                  alignItems="center"
                  onClick={() => navigate(`edit/${blog.id}`)}
                >
                  <Card flex="1">
                    <ImageCard
                      src={blog.image}
                      height="70px"
                      borderRadius="5px"
                    />
                  </Card>
                  <Card flex="3" flexDirection="column">
                    <h4>
                      {blog.title.length > 30
                        ? `${blog.title.substring(0, 30)}...`
                        : blog.title}
                    </h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${
                          blog.body.length > 45
                            ? `${blog.body.substring(0, 45)}...`
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
          </div>
        )}
      </div>
    </>
  );
};

const Pop = styled(AllCard)`
  h4 {
    color: #444444;
  }
  p {
    font-size: 14px;
    color: #777777;
  }
  /* .snippet {
    width: 100%;
    max-width: 40vw;
    @media (max-width: 916px) {
      max-width: 50vw;
    }
    @media (max-width: 700px) {
      max-width: 100%;
    }
  } */
`;

const createPostStyle = styled.div`
  position: fixed;
`;

export default ManagePostPage;
