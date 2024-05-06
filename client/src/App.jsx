import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/SignIn"  element={<SignIn/>}/>
        <Route path="/SignUp"  element={<SignUp/>}/>
        <Route path="/About"  element={<About/>}/>
        <Route path="/Dashboard"  element={<Dashboard/>}/>
        <Route path="/Projects"  element={<Projects/>}/>

      </Routes>
    </BrowserRouter>
  )
}
