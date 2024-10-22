import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'Hello from the world of tech!!!!!' },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      postAdded(state, action)  {
          state.push(action.payload);
        },
        prepare(title, content) {
          return {
            payload: {
              id: nanoid(),
              title,
              content,
            },
          };
        },
      
    },
  });

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;

