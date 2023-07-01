import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PostApi = createApi({
  reducerPath: "PostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000",
    prepareHeaders: (headers, { getState }) => {
      const { access } = getState().auth.token ? getState().auth.token : "";
      if (access) {
        // console.log(access);
        headers.set("authorization", `Bearer ${access}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Post", "Category", "User", "Comment"],

  endpoints: (builder) => ({
    //
    //Users API's Users
    getAllUser: builder.query({
      query: () => "users/",
      providesTags: ["User"],
    }),
    userProfile: builder.query({
      query: (id) => `users/profile/${id}/`,
      providesTags: ["User"],
    }),
    updateUserProfile: builder.mutation({
      query: ({ formData, id }) => ({
        url: `users/profile/${id}/`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
    registerUser: builder.mutation({
      query: ({ username, email, password, date_of_birth, gender }) => ({
        url: "users/register/",
        method: "POST",
        body: { username, email, password, date_of_birth, gender },
      }),
      invalidatesTags: ["User"],
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "users/token/",
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["User"],
    }),
    //
    // POST API'S POST
    getAllPosts: builder.query({
      query: ({ searchField }) =>
        `posts/?search=${searchField.length > 0 ? searchField : "&"}`,
      providesTags: ["Post"],
    }),

    query: (submit) => `?search=${submit}`,
    getMyPost: builder.query({
      query: (id) => `posts/?category=&owner=${id}`,
      providesTags: ["Post"],
    }),
    popularPosts: builder.query({
      query: () => `posts/?ordering=-numberOfViews`,
      providesTags: ["Post"],
    }),
    newPosts: builder.query({
      query: () => "posts/?ordering=-id",
      providesTags: ["Post"],
    }),

    relatedPost: builder.query({
      query: (id) => `posts/?category=${id}`,
      providesTags: ["Post"],
    }),

    getPostById: builder.query({
      query: (id) => `posts/${id}/`,
      providesTags: ["Post"],
    }),

    CreatePosts: builder.mutation({
      query: (formData) => ({
        url: "posts/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Post"],
    }),
    UpdatePost: builder.mutation({
      query: ({ id, formData }) => ({
        url: `posts/${id}/`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Post"],
    }),
    DeletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}/`,
        method: "DELETE",
      }),

      invalidatesTags: ["Post"],
    }),
    //
    // CATEGORY'S API'S
    getAllCategory: builder.query({
      query: () => "categorys/",
      providesTags: ["Category"],
    }),
    getCategoryById: builder.query({
      query: (id) => `categorys/${id}/`,
      providesTags: ["Category"],
    }),
    CreateCategory: builder.mutation({
      query: ({ name }) => ({
        url: "categorys/",
        method: "POST",
        body: { name },
      }),
      invalidatesTags: ["Category"],
    }),
    UpdateCategory: builder.mutation({
      query: ({ id, formData }) => ({
        url: `categorys/${id}/`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Category"],
    }),
    DeleteCategory: builder.mutation({
      query: (id) => ({
        url: `categorys/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),

    //COMMENT API'S
    getAllComment: builder.query({
      query: () => "comment/",
      providesTags: ["Comment"],
    }),
    getCommentById: builder.query({
      query: ({ id }) => `comment/${id}`,
      providesTags: ["Comment"],
    }),
    createComment: builder.mutation({
      query: ({ formData }) => ({
        url: "comment/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
});

export const {
  //Users Users
  useGetAllUserQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useUserProfileQuery,
  useUpdateUserProfileMutation,
  //
  //Posts Posts
  useGetAllPostsQuery,
  useGetMyPostQuery,
  useRelatedPostQuery,
  usePopularPostsQuery,
  useNewPostsQuery,
  useGetPostByIdQuery,
  useCreatePostsMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  //
  //Categorys Categories
  useGetAllCategoryQuery,
  useGetCategoryByIdQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  //
  //Comment Comments
  useGetAllCommentQuery,
  useGetCommentByIdQuery,
  useCreateCommentMutation,
} = PostApi;
