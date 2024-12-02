import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'

import BuyCredit from './pages/BuyCredit'

const App = () => {
  return (
    <div>
      <Home />
      <Result />
      <BuyCredit />
    </div>
  )
}

export default App
