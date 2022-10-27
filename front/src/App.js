import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import {Home} from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Carrito} from './components/Carrito';
import { Transacciones } from './components/Transacciones';
import { AdminProduct } from './components/AdminProduct';
import AdminProduct2 from './components/AdminProduct2';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Carrito" element={<Carrito />}/>
            <Route path="/ventas" element={<Transacciones />}/>
            <Route path="/producto/:id" element={<ProductDetails />}/>
            <Route path="/Admin-product" element={<AdminProduct />}/>

          </Routes>
        </div>
        <Footer />
    </div>
    </Router>
  );
}

export default App;