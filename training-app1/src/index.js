import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import {CartContextProvider} from "./context/CartContext"
import { CommentContextProvider } from './context/CommentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <CartContextProvider>
    <CommentContextProvider>
    <App />
    </CommentContextProvider>
    </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
