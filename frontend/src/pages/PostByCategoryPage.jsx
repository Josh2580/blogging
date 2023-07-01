import React from "react";
import { useParams } from "react-router-dom";

import { useGetCategoryByIdQuery } from "../features/Post/PostApi";
import LoadingPage from "../routes/LoadingPage";
import ErrorPage from "../routes/ErrorPage";
import Snippets from "../components/Snippets";
//Styles
import { HomePageStyle } from "../styles/HomePageStyle";
import { AllCard } from "../styles/SnippetStyle";
import styled from "styled-components";
import { HomePageResponsiveStyle } from "../styles/HomePageStyle";

const PostByCategoryPage = () => {
  const params = useParams();
  const { data, error, isLoading } = useGetCategoryByIdQuery(params.id);

  return (
    <HomePageResponsiveStyle>
      <PostByCategoryPageStyle>
        {isLoading ? (
          <LoadingPage />
        ) : error ? (
          <ErrorPage error={error} />
        ) : (
          <>
            <h1>{data.name}</h1>
            <AllCard>
              {data.post.map((blog) => (
                <Snippets key={blog.id} post={blog} image={blog.image} />
              ))}
            </AllCard>
          </>
        )}
      </PostByCategoryPageStyle>
    </HomePageResponsiveStyle>
  );
};

const PostByCategoryPageStyle = styled(HomePageStyle)`
  h1 {
    padding: 0.5rem 0rem 1rem 0rem;
    color: #878787;
  }
`;

export default PostByCategoryPage;
