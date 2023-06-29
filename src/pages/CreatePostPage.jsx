import React, { useState, useRef } from "react";
//
import { useNavigate } from "react-router-dom";
import {
  useCreatePostsMutation,
  useGetAllCategoryQuery,
} from "../features/Post/PostApi";
import {
  CreatePostStyle,
  InputsAll,
  BodyInputs,
  Inputs,
  CatOption,
  PostButton,
} from "../styles/CreatePostPageStyle";
//Editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Editor } from "@tinymce/tinymce-react";
// import { Editor } from "tinymce";

const CreatePostPage = () => {
  const [createPost, { isLoading, isError }] = useCreatePostsMutation();
  const { isFetching, error, data } = useGetAllCategoryQuery();

  const navigate = useNavigate();

  const [postTile, setPostTitle] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postBody, setPostBody] = useState("");

  const [value, setValue] = useState("");
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

  // const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };

  const formData = new FormData();
  formData.append("image", postImage);
  formData.append("title", postTile);
  formData.append("body", postBody);
  formData.append("category", postCategory);

  // console.log(postImage);

  const submitPost = async (e) => {
    e.preventDefault();
    if (postBody.length === 0) {
      alert("Post Body is Required");
    } else {
      const result = await createPost(formData);
      setPostTitle("");
      setPostBody("");
      setPostCategory("");
      navigate(-1);
    }
  };

  return (
    <CreatePostStyle>
      <form onSubmit={(e) => submitPost(e)}>
        <h2>Add New Post</h2>

        <br />
        <InputsAll>
          <Inputs>
            {/* <label htmlFor="title">Tile</label> */}
            <input
              placeholder="Enter Blog Title"
              maxLength={253}
              required
              type="text"
              id="title"
              name="title"
              value={postTile}
              onChange={(e) => setPostTitle(e.target.value)}
            />
          </Inputs>

          <Inputs>
            {/* <label htmlFor="category">Category</label> */}
            {isFetching ? (
              <p>Is Fetching</p>
            ) : error ? (
              error
            ) : (
              <select
                onChange={(e) => setPostCategory(e.target.value)}
                required
                id="category"
                name="category"
              >
                <CatOption value="" id="post-cat">
                  Select Category
                </CatOption>
                {data.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            )}
          </Inputs>

          <Inputs>
            {/* <label htmlFor="post_image">Upload Image</label> */}
            <input
              accept="images/*"
              required
              type="file"
              id="post_image"
              name="post_image"
              onChange={(e) => setPostImage(e.target.files[0])}
            />
            <img src={postImage} alt="UpLoad an Image" />
          </Inputs>

          <BodyInputs>
            <label htmlFor="body">Body</label>
            {/* <div className="row"> */}
            <ReactQuill
              theme="snow"
              value={postBody}
              onChange={setPostBody}
              modules={modules}
              className="editor-input"
              required
            />
            {/* <Editor
              apiKey="your-api-key"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            /> */}
            {/* </div> */}
            {/* <div dangerouslySetInnerHTML={{ __html: postBody }}></div> */}
          </BodyInputs>
        </InputsAll>

        <InputsAll>
          <div>
            <PostButton id="button" type="submit" disabled={isLoading}>
              Click to Post
            </PostButton>
            {isLoading && " Loading... "}
          </div>
        </InputsAll>
      </form>
    </CreatePostStyle>
  );
};

export default CreatePostPage;
