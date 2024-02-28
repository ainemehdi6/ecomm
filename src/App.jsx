import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import ListProduct from './Page/ListProduct';
import Login from './Page/Login/Login';
import Header from './Component/Header/Header';
import { authContext } from './Context/auth';
import { useState } from 'react';
import { CartContext } from './Context/cartContext';

function App() {
  const [auth, setAuth] = useState({ id: null, token: null });

  return (
    <>
      <authContext.Provider value={{ auth, setAuth }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<ListProduct />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<CartContext />} />
          </Routes>
        </BrowserRouter>
      </authContext.Provider>
    </>
  )
}

export default App;
