import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import {CartContextProvider} from "./context/CartContext"
import { CommentContextProvider } from './context/CommentContext';
import { SubscribedContextProvider } from './context/SubscribedContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <CommentContextProvider>
    <CartContextProvider>
   <SubscribedContextProvider>
    <App />
    </SubscribedContextProvider>
    </CartContextProvider>
    </CommentContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
