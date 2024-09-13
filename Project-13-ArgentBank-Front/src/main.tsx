import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import store from './global-state/store'
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    </Provider>
  );
} else {
  console.error("Root element not found. Make sure there's a div with id 'root' in your index.html.");
}



