import './App.css';
import {Routes, Route, } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import SignUp from './Pages/Login/SignUp';
import CheckOut from './Pages/Shared/CheckOut/CheckOut';
import RequiredAuth from './Pages/Login/RequiredAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='checkout' element={
          <RequiredAuth>
            <CheckOut/>
          </RequiredAuth>
        }/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
