import { Routes, Route } from 'react-router-dom'
import Movies from './Movies'
import Specific from './Specific'
import Specific_tv from './Specific_tv'
import Only_movies from './Only_movies'
import Only_series from './Only_series'
import About from './About'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Movies /> } />
      <Route path="/specific/:id" element={<Specific />} />
      <Route path="/specific_tv/:id" element={<Specific_tv />} />
      <Route path="/only_movies" element={<Only_movies />} />
      <Route path="/only_series" element={<Only_series />} />
      <Route path="/about" element={<About />} />
    </Routes>
      
    </>
  )
}

export default App
