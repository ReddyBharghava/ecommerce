import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Register from './pages/Register'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Laptops from './pages/Laptops'
import Product from './pages/Product'
import About from './pages/About'
import TopCellPhones from './pages/TopCellPhones'
import Footer from './components/Footer'
import Wishlist from './pages/Wishlist'
const App = () => {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pages' element={<About/>} />
        <Route path='/products' element={<Product/>} />

        <Route path='/contact' element={<Contact/>} />
        <Route path='/laptops' element={<Laptops/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/mobiles' element={<TopCellPhones/>} />
       <Route path='/wishlist' element={<Wishlist/>} />
      </Routes>
      <Footer/>
    </div>
  ) 
}

export default App
