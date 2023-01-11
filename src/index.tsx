import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { makeStore } from './redux/store';

const container = document.getElementById('root')!;
const root = createRoot(container);
const store = makeStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
