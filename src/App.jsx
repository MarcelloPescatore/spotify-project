import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './layout/Layout'
import AppMain from './components/AppMain'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route element={<Layout />}>
            <Route index element={<AppMain />} />
            <Route path="*" element={<h2>Not Found</h2>} /> {/* fare pagina not found */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
