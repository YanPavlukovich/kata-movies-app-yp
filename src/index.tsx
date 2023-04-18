import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './index.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
