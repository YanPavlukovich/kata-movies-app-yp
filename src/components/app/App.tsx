import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import './App.css';
import MoviesPage from './components/MoviesPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MoviesPage />
      </div>
    </Provider>
  );
}

export default App;
