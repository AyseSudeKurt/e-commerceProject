import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Camera } from 'lucide-react';
import Header from "./layout/Header";


function App() {

  return (
    <div className="App">
      <Header />
      <main className="p-4">

      </main>
    </div>
  )
}

export default App
