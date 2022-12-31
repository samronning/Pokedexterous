import { configureStore } from "@reduxjs/toolkit";
import generationReducer from "./slices/generation";
// ...

const store = configureStore({
  reducer: {
    generationReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
