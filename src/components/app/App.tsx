import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../store/movies-slice';
import { MoviesPage } from '../movies-page/MoviesPage';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
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
