import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Marketplace from './pages/Marketplace'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/puc" element={<Marketplace />} />
      </Routes>
    </Router>
  )
}
