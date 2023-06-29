import React from "react";
import { RelatedStyle } from "../styles/RelatedStyle";

const RelatedPost = ({ image, title, body }) => {
  return (
    <RelatedStyle>
      <img src={image} alt="title" />
      <h4>{title.substring(0, 60)}</h4>
    </RelatedStyle>
  );
};

export default RelatedPost;
