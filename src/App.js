"use client";
import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/home'
import Detail from '../src/pages/detail'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/home" element={<Home/>} />      
      <Route path="/detail" element={<Detail/>} />
    </Routes>
  </BrowserRouter> 

  );
}

export default App;
