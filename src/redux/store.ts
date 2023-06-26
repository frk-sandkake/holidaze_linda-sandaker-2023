import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import venuesSlice from "./venuesSlice";
import authSlice from "./authSlice";
import searchSlice from "./searchSlice";
import paginationSlice from "./paginationSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    venues: venuesSlice,
    search: searchSlice,
    pagination: paginationSlice,
})

export const setupStore = () => {
  return configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;