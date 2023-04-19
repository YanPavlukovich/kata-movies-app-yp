import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import moviesReducer from './slices/movies-slice';
import errorReducer from './slices/error-slice';
import ratedReducer from './slices/rated-slice';
import genresReducer from './slices/genres-slice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';

const rootReducer = combineReducers({
  movies: moviesReducer,
  error: errorReducer,
  rated: ratedReducer,
  genres: genresReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
