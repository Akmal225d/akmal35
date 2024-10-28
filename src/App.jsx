import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Catalog from './components/Catalog/Catalog'
import Hero from './components/Hero/Hero'
const App = () => {
  return (
    <div>
      <Header />
      <Hero/>
<Catalog/>
    </div>
  )
}

export default App
