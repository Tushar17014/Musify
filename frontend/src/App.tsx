import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import AuthCallback from "./pages/auth-callback/authCallback"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/auth-callback" element={<AuthCallback />} />  
      </Routes>      
    </BrowserRouter>
    </>
  )
}

export default App
