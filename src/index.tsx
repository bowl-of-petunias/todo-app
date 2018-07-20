import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './utils/configureStore';

const store = configureStore();

const rootElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootElement, document.getElementById('root'));
registerServiceWorker();
