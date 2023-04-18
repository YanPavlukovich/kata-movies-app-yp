import React from 'react';
import { Provider } from 'react-redux';
import { moviesSlice } from '../../store/movies-slice';
import { MoviesPage } from '../movies-page/MoviesPage';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <MoviesPage title="Popular Movies" />
      </div>
    </Provider>
  );
};

export default App;
