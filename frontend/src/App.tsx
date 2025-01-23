import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import AuthCallback from "./pages/auth-callback/authCallback"
import MainLayout from "./layout/mainLayout"
import Library from "./pages/library/library"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/auth-callback" element={<AuthCallback />} /> 
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />  
          <Route path="/library" element={<Library />} />  
        </Route> 
      </Routes>      
    </BrowserRouter>
    </>
  )
}

export default App
