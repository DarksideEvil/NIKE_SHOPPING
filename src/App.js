import React from 'react';
import AppRoutes from './router/AppRoutes';
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from 'react-use-cart';


function App() {
  return (
      <>
        <CartProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CartProvider>
      </>
  )
}

export default App
