import './App.css'
import  Home  from './pages/Home'
import { Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
