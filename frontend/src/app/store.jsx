import { configureStore } from "@reduxjs/toolkit";

import { PostApi } from "../features/Post/PostApi";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [PostApi.reducerPath]: PostApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PostApi.middleware),
  // devTools: true, // set to false on production level
});
