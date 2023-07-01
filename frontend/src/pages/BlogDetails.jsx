import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
//The Styles o the PAGE
import {
  BlogDetails as BlogDetailsStyle,
  PostHeader,
  PostBody,
  PostImage,
  RelatedStylePosts,
} from "../styles/BlogDetailsStyle";
import ResponsiveStyle from "../styles/ResponsiveStyle";
//THE ICONS NOW
import ShareComp from "../components/ShareComp";
import { FaRegUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { BsShareFill } from "react-icons/bs";

//
import LoadingPage from "../routes/LoadingPage";
import ErrorPage from "../routes/ErrorPage";
import RelatedPost from "../components/RelatedPost";
import PopularPost from "../components/PopularPost";
import Comment from "../components/Comment";
import { Card } from "../newStyles/Card";
import styled from "styled-components";

//
import {
  useGetPostByIdQuery,
  useRelatedPostQuery,
} from "../features/Post/PostApi";

const BlogDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const ref = useRef([]);
  // console.log(location.pathname);

  const { data, error, isLoading } = useGetPostByIdQuery(params.id);

  const {
    data: relatedData,
    error: relatedError,
    isLoading: relatedIsLoading,
  } = useRelatedPostQuery(params.cat);

  // const [postCategoryId, setPostCategoryId] = useState("");
  const [relatedPost, setRelatedPost] = useState([]);
  // const [relatedId, setRelatedId] = useState("");
  const [viewId, setViewId] = useState("");

  const catHandler = () => {
    if (relatedData == undefined) {
      //
    } else if (relatedIsLoading) {
      //
    } else if (relatedData) {
      ref.current = relatedData.filter((value) => value.id !== data.id);
      setRelatedPost(ref.current);
    }
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (isLoading) {
      // console.log("data loading");
    } else {
      // setRelatedId(data.category);
      catHandler();
      setViewId(data.id);
      // console.log(viewId);
    }
  }, [relatedData, data]);

  const RelatedHandler = ({ id, cat }) => {
    setRelatedPost([]);
    catHandler();
    navigate(`/blog/details/${id}/${cat}`);
  };

  // console.log(ref.current);

  return (
    <BlogDetailsStyle>
      {isLoading ? (
        <LoadingPage />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        // console.error(error)
        <div key={data.id}>
          {/* {catHandler()} */}
          <ResponsiveStyle>
            <Details>
              <div className="details">
                <Card
                  flexDirection="column"
                  color="#777777"
                  padding="16px 16px"
                  margin="2px"
                  boxShadow="0px 0px 5px 5px #ececec"
                  // fontSize="14px"
                  gap="10px"
                >
                  <PostHeader>
                    <div className="header">
                      <h3>{data.title}</h3>
                    </div>
                    <div className="author">
                      <p>
                        <FaRegUser /> By {data.owner}
                      </p>
                      <p>
                        <IoMdTime />

                        {data.date.substring(0, 10)}
                      </p>
                    </div>
                  </PostHeader>
                  <PostBody>
                    <Share gap="10px">
                      <span>
                        <BsShareFill />
                      </span>
                      <ShareComp pathname={location.pathname} />
                    </Share>
                    <PostImage>
                      <img src={data.image} alt={data.title} />
                    </PostImage>
                    <p dangerouslySetInnerHTML={{ __html: data.body }}></p>
                  </PostBody>
                </Card>

                {ref.current.length > 0 && (
                  <Relate
                    flexDirection="column"
                    // background="red"
                    padding="16px 16px"
                    margin="2px"
                    boxShadow="0px 0px 5px 5px #ececec"
                    gap="16px"
                  >
                    <h3>Related Posts</h3>
                    <RelatedStylePosts>
                      {ref.current.slice(0, 6).map((relate) => (
                        <div
                          key={relate.id}
                          onClick={() =>
                            RelatedHandler({
                              id: relate.id,
                              cat: relate.category,
                            })
                          }
                        >
                          <RelatedPost
                            key={relate.id}
                            image={relate.image}
                            title={relate.title}
                            body={relate.body}
                            onClick={RelatedHandler}
                          />
                        </div>
                      ))}
                    </RelatedStylePosts>
                  </Relate>
                )}
                <Comment dataComment={data} />
                <br />
              </div>
              <div className="popular">
                <PopularPost />
              </div>
            </Details>
          </ResponsiveStyle>
        </div>
      )}
    </BlogDetailsStyle>
  );
};

const Details = styled(Card)`
  gap: 2rem;
  .details {
    flex: 4;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .popular {
    flex: 2;
    /* background: white;
    box-shadow: 0px 0px 5px 7px #ececec;
    margin: 2px; */
  }
  @media (max-width: 890px) {
    flex-direction: column;
  }
`;

const Share = styled(Card)`
  align-items: center;
  /* justify-content: center; */
  span {
    /* border: 1px solid black; */
    box-shadow: 0px 0px 5px 3px #ececec;
    padding: 2px 3px 0px 3px;
    color: #777777;
    margin: 2px;
  }
`;

const Relate = styled(Card)`
  h3 {
    color: #444444;
    border-bottom: 1px solid #b9b9b9;
    padding-bottom: 8px;
  }
`;

export default BlogDetails;
