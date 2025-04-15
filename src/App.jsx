import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'
import { Input } from './Components'
import { Outlet } from 'react-router-dom'
import Home from './Pages/Home'

function App() {

  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
