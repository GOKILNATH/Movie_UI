import { Routes, Route } from 'react-router-dom'
import Movies from './Movies'
import Specific from './Specific'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Movies /> } />
      <Route path="/specific/:id" element={<Specific />} />
    </Routes>
      
    </>
  )
}

export default App
