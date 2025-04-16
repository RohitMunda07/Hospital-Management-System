import { useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer'
import './App.css'
import { Input } from './Components'
import { Outlet } from 'react-router-dom'
import Home from './Pages/Home'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

export default App
