import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { MoviesPage } from './features/movies/MoviesPage';

export const App = () => {
  return (
    <Provider store={store}>
      <MoviesPage />
    </Provider>
  );
};
