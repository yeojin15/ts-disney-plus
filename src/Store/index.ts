import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { likeSlice } from './likeSlice';

export default configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer: {
    likeSlice: likeSlice.reducer,
  },
});
