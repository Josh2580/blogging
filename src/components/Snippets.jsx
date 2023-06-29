import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//Styles
import {
  EachCard,
  ContentInfoCard,
  ImageCard,
  MyNavLink,
} from "../styles/SnippetStyle";
import { Card } from "../newStyles/Card";
import styled from "styled-components";
//
import { useGetAllCategoryQuery } from "../features/Post/PostApi";
//
//
import { useSelector, useDispatch } from "react-redux";

const Snippets = ({ post, image }) => {
  const userInfo = useSelector((state) =>
    state.auth.userInfo ? state.auth.userInfo : ""
  );
  const { data: userData } = userInfo;

  const { data, error, isLoading } = useGetAllCategoryQuery();
  const ref = useRef([]);

  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [theBody, setTheBody] = useState(
    post.body.length > 70 ? `${post.body.substring(0, 70)}...` : post.body
  );

  const catHandler = () => {
    setCategoryId(post.category);
    if (error) {
      // console.log("undefined data");
    } else if (isLoading) {
      // console.log("is loading data");
    } else if (data) {
      ref.current = data.filter((value) => value.id == categoryId);
      ref.current.map((cat) => {
        setCategoryName(cat.name);
      });
      // console.log(categoryName);
      // console.log(categoryId);
      // console.log(ref.current);
    }
  };
  useEffect(() => {
    if (error) {
      // console.log("data error");
    } else if (isLoading) {
      // console.log("data loading");
    } else {
      setCategoryId(post.category);
      catHandler();
    }
  }, [data, categoryId, categoryName]);

  const BlogDetailsUrl = userData
    ? `blog/details/${post.id}/${post.category}` // same as /dashboard/blog/details/${post.id}/${post.category}`
    : `/blog/details/${post.id}/${post.category}`;
  // `blog/details/${post.id}/${post.category}`;

  return (
    <Card
      background="white"
      boxShadow="0px 0px 5px 5px #ececec"
      margin="2px"
      // padding="16px"
      // height="fit-content"
    >
      <MyNavLink to={BlogDetailsUrl}>
        <Snip flexDirection="column" gap="0px">
          <img src={image} alt={post.title} />
          <Card
            flexDirection="column"
            padding="16px"
            paddingTop="0px"
            gap="10px"
          >
            <Card gap="10px">
              <span>{categoryName}</span>
              <span>|</span>
              <span className="foot">{post.date.substring(0, 10)}</span>
            </Card>

            <h4 className="header">
              {post.title.length > 45
                ? `${post.title.substring(0, 45)}...`
                : post.title}{" "}
            </h4>
            <p
              className="header"
              dangerouslySetInnerHTML={{ __html: theBody }}
            ></p>

            {/* <ContentInfoCard>
            <span className="foot">Read More...</span>
          </ContentInfoCard> */}
          </Card>
        </Snip>
      </MyNavLink>
    </Card>
  );
};

const Snip = styled(Card)`
  span {
    color: #aaaaaa;
    font-size: 12px;
  }
  p {
    color: #656565;
    font-size: 14px;
  }
  h4 {
    color: #171c2a;
    font-size: 20px;
    /* line-height: 20px; */
    /* font-weight: 500; */
  }
`;

export default Snippets;
