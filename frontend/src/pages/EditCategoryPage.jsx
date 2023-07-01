import React, { useState, useEffect, useRef } from "react";
//
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetCategoryByIdQuery,
  useGetAllCategoryQuery,
  useUpdateCategoryMutation,
} from "../features/Post/PostApi";
//Styles
import {
  CreatePostStyle,
  InputsAll,
  Inputs,
  PostButton,
} from "../styles/CreatePostPageStyle";

const EditCategory = () => {
  // const [name, setName] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const ref = useRef("");
  // let ApiId = params.id;

  const {
    data: catData,
    error: catError,
    isLoading: catIsLoading,
  } = useGetCategoryByIdQuery(params.id);

  const [updateCategory, { isLoading, error }] = useUpdateCategoryMutation();

  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (catData == undefined) {
      setCategoryName("");
    } else {
      setCategoryName(catData.name);
      // console.log(catData);
    }
  }, [catData]);

  const formData = new FormData();

  formData.append("name", categoryName);

  const submitPost = async (e) => {
    e.preventDefault();
    const result = await updateCategory({ id: params.id, formData });
    navigate(-1);
  };
  return (
    // <CreatePostStyle onClick={catHandler}>
    <CreatePostStyle>
      <form onSubmit={(e) => submitPost(e)}>
        <br />
        <h2>Edit Category</h2>
        <br />
        <InputsAll>
          <Inputs>
            <input
              placeholder="Type New Category Name"
              maxLength={253}
              type="text"
              id="title"
              name="title"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </Inputs>
        </InputsAll>
        <InputsAll>
          <div>
            <PostButton id="button" type="submit" disabled={isLoading}>
              Update Post
            </PostButton>
            {isLoading && " Loading... "}
          </div>
        </InputsAll>
      </form>
    </CreatePostStyle>
  );
};

export default EditCategory;
