import './App.css'
import Archive from './pages/Archive'
import  Home  from './pages/Home'
import { Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />

    </Routes>
  )
}

export default App
