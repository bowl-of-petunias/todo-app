import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '../reducers';

export function configureStore() {
  const enhancer = composeWithDevTools(
    applyMiddleware()
  );

  const store = createStore(rootReducer, enhancer);
  return store;
}