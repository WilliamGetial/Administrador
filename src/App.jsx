import React from 'react'
import NavbarApp from './components/NavbarApp'
import './index.css'
import { UseNavegation } from './Hooks/UseNavegation'
import { Routes,Route } from 'react-router-dom' 

function App () {
  const {Links} = UseNavegation()

  return (
    <div>
      <NavbarApp props={Links} />
    </div>
  )
}

export default App