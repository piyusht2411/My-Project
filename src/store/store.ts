import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/usersReducer';

import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { api } from '../services/api';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
