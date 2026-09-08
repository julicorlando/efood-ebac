import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<Restaurant />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
