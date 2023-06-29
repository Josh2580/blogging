import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { PostButton } from "../styles/CreatePostPageStyle";
import { useCreateCommentMutation } from "../features/Post/PostApi";

import { useNavigate } from "react-router-dom";

const Comment = ({ dataComment }) => {
  const [createComment, { data, isLoading, error }] =
    useCreateCommentMutation();

  const navigate = useNavigate();

  const [post, setPost] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const formData = new FormData();
  formData.append("post", post);
  formData.append("message", message);
  formData.append("name", name);
  formData.append("email", email);

  const CommentHandler = async (e) => {
    e.preventDefault();
    createComment({ formData });
    setMessage("");
    window.location.reload();
  };
  // console.log(data);
  // console.log(dataComment.comment.length);

  useEffect(() => {
    setPost(dataComment.id);
  }, [dataComment]);

  return (
    <CommentStlye>
      <h3>Comments</h3>
      <AllComment>
        {dataComment.comment.length == 0 && (
          <p>There is no comment for now. Be the first to comment</p>
        )}
        {dataComment.comment.map((com) => (
          <div className="space" key={com.id}>
            <UserCommenting>
              <span>{`${com.name} said that:`}</span>
            </UserCommenting>
            <Details>
              <strong> {com.message} </strong>
            </Details>
          </div>
        ))}
      </AllComment>

      <form onSubmit={CommentHandler}>
        <textarea
          placeholder="Enter your comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          required
        ></textarea>

        <input
          type="text"
          placeholder="Enter Fullname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button>Send</button>
      </form>
    </CommentStlye>
  );
};

const CommentStlye = styled.div`
  /* border-radius: 10px; */
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 0px 5px 5px #ececec;
  margin: 2px;
  padding: 16px;
  h3 {
    color: #444444;
    border-bottom: 1px solid #b9b9b9;
    padding-bottom: 8px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0rem;
    /* border: 2px solid black; */
    box-shadow: 5 5 5 10 #afafaf;
    button {
      /* width: 5rem; */
      font-size: 1rem;
      padding: 0.5rem;
      border-radius: 5px;
      background: #634b78;
      border: none;
      margin-top: 1rem;
      padding: 0.5rem 1.5rem;
      color: white;
    }
    textarea,
    input {
      border-radius: 5px;
      font-size: 16px;
      padding: 0.5rem;
      width: 100%;
      outline: none;
      border: 1px solid #6b6b6b;
    }
  }
`;

const UserCommenting = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 4px;
`;

const AllComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #3d3c3c;
  margin-left: 20px;
`;

export default Comment;
