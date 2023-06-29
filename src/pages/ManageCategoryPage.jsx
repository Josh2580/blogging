import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import {
  useGetAllCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} from "../features/Post/PostApi";
import EditCategory from "../components/EditCategory";
//Styles
import { ManageCatStyle } from "../styles/ManageCategoryPageStyle";
//
import LoadingPage from "../routes/LoadingPage";
import ErrorPage from "../routes/ErrorPage";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
//

const ManageCategoryPage = () => {
  const { data, isLoading, error } = useGetAllCategoryQuery();
  const [
    createCategory,
    {
      isLoading: isLoadingCreate,
      data: dataCreate,
      isSuccess: isSuccessCreate,
    },
  ] = useCreateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const navigate = useNavigate();
  const params = useParams();

  const [createCatName, setCreateCatName] = useState("");

  const EditCatHandler = ({ id, name }) => {
    // console.log(id);
    // console.log(name);

    navigate(`edit/${id}`);
  };

  const deleteFunction = (id) => {
    deleteCategory(id);

    console.log(`You Deleted this ID =${id}`);
  };

  const DeleteHandler = ({ id }) => {
    const result = window.confirm("Do you confirm to delete this Category?");
    result ? deleteFunction(id) : console.log("No Clicked");
  };

  const CreateCatInputHandler = (e) => {
    setCreateCatName(e.target.value);
  };

  const submitCategory = (e) => {
    e.preventDefault();
    // console.log(createCatName);
    let name = createCatName;
    createCategory({ name });
    setCreateCatName("");
  };

  return (
    <ManageCatStyle>
      <h1>Categorys for Posts</h1>
      <div className="body">
        <form onSubmit={(e) => submitCategory(e)}>
          <h2>Add New Category</h2>
          {isSuccessCreate && (
            <div className="success">
              <h2>{dataCreate.name}</h2>
              <p>
                You've successfully added a new category, Please reload the Page
              </p>
            </div>
          )}
          <div>
            <label htmlFor="title">Tile:</label>
            <input
              maxLength={50}
              required
              type="text"
              id="name"
              value={createCatName}
              onChange={CreateCatInputHandler}
            />
          </div>

          <div>
            <input type="submit" value="Submit" disabled={isLoadingCreate} />
            {isLoadingCreate && " Loading... "}
          </div>
        </form>
        <div>
          {isLoading ? (
            <LoadingPage />
          ) : error ? (
            <ErrorPage />
          ) : (
            <table>
              <thead>
                <tr className="table_head">
                  <th>S\N</th>
                  <th>NAME</th>
                  <th>ID</th>
                  {/* <th>No. Of POSTS</th> */}
                  <th>EDIT</th>
                  {/* <th>DELETE</th> */}
                </tr>
              </thead>
              <tbody>
                {data.map((cat, index) => (
                  <tr key={cat.id} className="table_body">
                    <td>{index + 1}</td>
                    <td>{cat.name}</td>
                    <td>{cat.id}</td>
                    {/* <td>{cat.posts.length()}</td> */}
                    <td>
                      <AiFillEdit
                        onClick={() =>
                          // EditCatHandler({ id: cat.id, name: cat.name })
                          navigate(`edit/${cat.id}`)
                        }
                      />
                    </td>
                    {/* <td>
                      <AiFillDelete
                        onClick={() => DeleteHandler({ id: cat.id })}
                      />
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </ManageCatStyle>
  );
};

export default ManageCategoryPage;
