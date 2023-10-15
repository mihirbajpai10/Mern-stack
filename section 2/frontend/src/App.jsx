import React from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import Todo from './components/Todo';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <div>
      <Toaster position='top-right' />
      <BrowserRouter>
      <AnimatePresence>
        {/* <Link to="/login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/">Home</Link> */}
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Signup /> } />
          <Route path="/event" element={ <EventHandling /> } />
          <Route path="/state" element={ <StateManagement /> } />
          <Route path="/todo" element={ <Todo /> } />
          <Route path="/contact us" element={ <Contact /> } />
          <Route path="*" element={ <Notfound /> } />
        </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  )
}

export default App