import React, { useState, useEffect, useRef } from "react";
//
import { useNavigate, useParams } from "react-router-dom";
import {
  useUpdatePostMutation,
  useGetPostByIdQuery,
  useGetAllCategoryQuery,
  useDeletePostMutation,
} from "../features/Post/PostApi";
import {
  CreatePostStyle,
  InputsAll,
  BodyInputs,
  Inputs,
  CatOption,
  PostButton,
} from "../styles/CreatePostPageStyle";
import { Button } from "../newStyles/Button";
// import { Card } from "../newStyles/Card";
import styled from "styled-components";
//Editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
//
import { AiFillDelete } from "react-icons/ai";
import PopUp from "../components/PopUp";
//

const EditPostPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const ref = useRef("");

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      // [{ header: 1 }, { header: 2 }], // custom button values
      // [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      // [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      // [{ direction: "rtl" }], // text direction

      // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      // [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ header: 1 }, { header: 2 }],

      // [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      // [{ align: [] }],
    ],
  };

  const {
    data: postData,
    error: postError,
    isLoading: postIsLoading,
  } = useGetPostByIdQuery(params.id);

  const [updatePost, { isLoading, error }] = useUpdatePostMutation();

  const {
    data: catData,
    error: catError,
    isFetching,
    refetch,
  } = useGetAllCategoryQuery();

  const [postId, setPostId] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postCategoryName, setPostCategoryName] = useState("");
  const [postCategoryId, setPostCategoryId] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postUpdateImage, setPostUpdateImage] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postDate, setPostDate] = useState("");
  const [deleteVar, setDeleteVar] = useState(false);

  const catHandler = () => {
    let i = 0;
    if (catData == undefined) {
      // console.log("Its undefined");
    } else if (isFetching) {
      // console.log("its fetching");
    } else if (catData) {
      ref.current = catData.filter((value) => value.id == postCategoryId);
      ref.current.map((value) => {
        setPostCategoryName(value.name);
        // console.log(value.name);
        // console.log(postCategoryName);
      });
      // console.log(ref.current);
    }
  };

  // console.log("post cat name :", postCategoryName);
  // console.log("cat data :", catData);

  // console.log(postId);

  useEffect(() => {
    if (postData == undefined) {
      setPostId("");
      setPostTitle("");
      setPostCategoryId("");
      setPostBody("");
      setPostDate("");
      setPostImage("");
    } else {
      setPostId(postData.id);
      setPostTitle(postData.title);
      // setPostCategoryName(postData.category);
      setPostCategoryId(postData.category);
      setPostBody(postData.body);
      setPostDate(postData.date);
      setPostImage(postData.image);
    }
  }, [postData, postId]);

  const formData = new FormData();
  // console.log(postUpdateImage.name);

  formData.append("title", postTitle);
  formData.append("body", postBody);
  formData.append("category", postCategoryId);
  if (postUpdateImage.name) {
    formData.append("image", postUpdateImage);
  }

  // console.log(postImage);

  const submitPost = async (e) => {
    e.preventDefault();
    // console.log(postCategoryId);
    const result = await updatePost({ id: params.id, formData });
    // console.log(result);
    navigate(-1);
  };

  useEffect(() => {
    catHandler();
    // console.log("cat function");
    // console.log(catData);
  }, [ref.current, catData, postCategoryId]);

  const [deletePost] = useDeletePostMutation();

  const DeletePopUp = () => {
    setDeleteVar(true);
  };

  const DeleteHandler = ({ popButton }) => {
    // console.log("coming from pop:  ", popButton);
    if (popButton === "cancel") {
      setDeleteVar(false);
      console.log("Cancel and Cancel now");
    }
    if (popButton === "delete") {
      console.log("Just Deleted now");
      deleteFunction();
    }
    // console.log(id);

    // const result = window.confirm("Do you confirm to delete this Post?");
    // result ? deleteFunction(id) : console.log("No Clicked");
  };

  const deleteFunction = () => {
    deletePost(postId);
    navigate(-1);
    console.log(`You Deleted this ID =${postId}`);
  };

  return (
    <>
      {/* <CreatePostStyle onClick={() => catHandler()}> */}
      <CreatePostStyle>
        <form onSubmit={(e) => submitPost(e)}>
          <br />
          <h2>Edit Post</h2>
          {postError && <h1>{postError}</h1>}
          {postIsLoading && <h1>{postIsLoading}</h1>}
          <br />
          <InputsAll>
            <p>
              Date created: <strong>{postDate.substring(0, 10) || ""}</strong>
            </p>
            <Inputs>
              <input
                placeholder="Enter Blog Title"
                maxLength={253}
                type="text"
                id="title"
                name="title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
            </Inputs>

            <Inputs>
              <label htmlFor="category">
                Category: <strong> {postCategoryName}</strong>
              </label>
              {isFetching ? (
                <p>Is Fetching</p>
              ) : catError ? (
                error
              ) : (
                <select
                  onChange={(e) => setPostCategoryId(e.target.value)}
                  id="category"
                  name="category"
                >
                  <option value={postCategoryId} id="post-cat">
                    Change Category
                  </option>
                  {catData.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              )}
            </Inputs>

            <Inputs>
              <label htmlFor="post_image">Change Image</label>
              <img src={postImage} alt={postTitle} />

              <input
                accept="images/*"
                type="file"
                id="post_image"
                name="post_image"
                onChange={(e) => setPostUpdateImage(e.target.files[0])}
              />
            </Inputs>

            <BodyInputs>
              <label htmlFor="body">Body</label>
              {/* <textarea
              cols={20}
              rows={10}
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
            ></textarea> */}
              <ReactQuill
                theme="snow"
                value={postBody}
                onChange={setPostBody}
                modules={modules}
                className="editor-input"
              />
              {/* <div dangerouslySetInnerHTML={{ __html: postBody }}></div> */}
            </BodyInputs>
          </InputsAll>

          <InputsAll>
            <div>
              <Button id="button" type="submit" disabled={isLoading}>
                Update Post
              </Button>
              {isLoading && " Loading... "}
            </div>
          </InputsAll>
        </form>

        <br />
        <br />

        <Button
          width="fit-content"
          display="flex"
          alignItems="center"
          gap="1rem"
          border="1px solid red"
          background="white"
          color="red"
          hoverBackground="red"
          hoverColor="white"
          onClick={() => DeletePopUp()}
        >
          <AiFillDelete />
          Delete
        </Button>
      </CreatePostStyle>
      {deleteVar && (
        <Modal>
          <PopUp
            // onClick={DeleteHandler}
            pop={DeleteHandler}
            // cancelButton={cancelButton}
            // deleteButton={deleteButton}
          />
        </Modal>
      )}
    </>
  );
};

const Modal = styled.div`
  position: fixed;
  background: #3d3d3da0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-150%);
`;

export default EditPostPage;
