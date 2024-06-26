import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./compoents/Header";
import Footer from "./compoents/footer";
import PrivateRoute from "./compoents/privateRoute";
import OnlyAdminPrivateRoute from "./compoents/OnlyAdminprivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./compoents/ScrollToTop";
import Search from "./pages/Search";


export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Header/>
      
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/SignIn"  element={<SignIn/>}/>
        <Route path="/SignUp"  element={<SignUp/>}/>
        <Route path='/search' element={<Search />} />
        <Route path="/About"  element={<About/>}/>
        <Route element={<PrivateRoute/>}>
               <Route path="/Dashboard"  element={<Dashboard/>}/>
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
               <Route path="/create-post"  element={<CreatePost />}/>
               <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path="/Projects"  element={<Projects/>}/>
        <Route path="/PostPage"  element={<PostPage/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
