import { Route, Routes } from "react-router-dom"
import Home from "./components/home"
import LoginPage from "./components/loginpage"
import Registerpage from "./components/registerpage"

function App() {

  return (
    <>
    <Routes>     
       <Route path="/" element={<Home/>}/>
       <Route path="/reg" element={<Registerpage/>}/>
       <Route path="/login" element={<LoginPage/>}/>
    </Routes>

    </>
  )
}

export default App
