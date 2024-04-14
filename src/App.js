import './App.css'
import React, { useState } from 'react'
import Regestration from './Components/Regestration'
import ToDos from './Components/ToDos'

function App() {
  const [isRegister, setIsRegister] = useState(false)

  const register = () =>{
    setIsRegister(true)
  }
  return (
    <div className='body'>
      {!isRegister ? (
         <Regestration onRegistration = {register}></Regestration>
      ) : (
        <ToDos></ToDos>
      )}
    </div>
  )
}

export default App


