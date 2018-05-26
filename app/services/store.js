import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default function compileStore(isDebug = true) {
  const persistConfig = {
    key: 'root',
    storage,
  };

  let middleware = applyMiddleware(thunk);

  if (isDebug) {
    middleware = applyMiddleware(thunk, logger);
  }

  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(persistedReducer, middleware)
  const persistor = persistStore(store)

  return { store, persistor };
}