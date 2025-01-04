import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './layout/Layout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout/>} />
          <Route path="*" element={<h2>Not Found</h2>} /> {/* fare pagina not found */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
