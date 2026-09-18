import { Navigate, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Restaurant from './pages/Restaurant'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurant />} />
        <Route path="/carrinho" element={<Navigate to="/" replace />} />
        <Route path="/checkout" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Cart />
    </>
  )
}

export default App
