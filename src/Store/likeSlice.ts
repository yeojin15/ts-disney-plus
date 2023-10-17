import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  like: false,
};

export const likeSlice = createSlice({
  name: 'likeSlice',
  initialState,
  reducers: {
    setMovieLike: (state, action) => {
      state.id = action.payload.id;
      state.like = action.payload.like;
    },
  },
});

export const { setMovieLike } = likeSlice.actions;
