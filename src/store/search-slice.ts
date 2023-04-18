import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchState = {
  query: string;
}

const initialState: SearchState = {
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuerySlice(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuerySlice } = searchSlice.actions;
export default searchSlice.reducer;
