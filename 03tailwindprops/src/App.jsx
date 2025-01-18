import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  
 let obj = {
  name : "P Raj",
  city : "Mumbai"
 }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-md mb-4' >Tailwind Testing</h1>
       <Card  youtube = "RootZeros" someObj={obj}/>
       <Card btntext = "Visit Me"/>
    </>
  )
}

export default App
