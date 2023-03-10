import { configureStore } from "@reduxjs/toolkit";
import generationReducer from "./slices/generation";
import searchReducer from "./slices/search";
import sortReducer from "./slices/sort";
import loadingReducer from "./slices/loading";
import typeReducer from "./slices/type";
// ...

const store = configureStore({
  reducer: {
    generationReducer,
    searchReducer,
    sortReducer,
    loadingReducer,
    typeReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
