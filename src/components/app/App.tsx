import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import './App.scss';
import MoviesPage from '../movies-page/MoviesPage';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <MoviesPage />
      </div>
    </Provider>
  );
}

export default App;
