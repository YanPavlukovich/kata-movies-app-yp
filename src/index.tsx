import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/app/App';
import store, { persistor } from './store/store';
import ConnectionNetwork from './components/connection-network/ConnectionNetwork';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectionNetwork>
          <App />
        </ConnectionNetwork>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
