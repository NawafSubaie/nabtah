import logo from './../icons/logo.svg';
import './../css/App.css';
import { BrowserRouter,Link,Route,Routes,useNavigate } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Register from './Register';
import NotFound from './NotFound';
import Logged from './Logged';
import axios from 'axios';
import { useState,useLayoutEffect, useRef, useEffect } from 'react';
import UploadPage from './UploadImage';
import History from './History';
import Account from './Account'
import About from './About';
import Plants from './Plants';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import HomeAr from './../ComponentsAr/HomeAr'
import AboutAr from './../ComponentsAr/About'
import LoginAr from './../ComponentsAr/Login'
import RegisterAr from './../ComponentsAr/Register'
import UploadAr from './../ComponentsAr/UploadImage'
import HistoryAr from './../ComponentsAr/History'
import AccountAr from './../ComponentsAr/Account'

function App() {

  const [user,setUser] = useState('')




  return (
   <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/login" element={sessionStorage.getItem('logged') ? <Logged /> :<Login/>}></Route>
      <Route path="/register" element={sessionStorage.getItem('logged') ? <Logged /> :<Register/>}></Route>
      <Route path="/about" element={<About/>}></Route>

      <Route path="/ar" element={<HomeAr />}></Route>
      <Route path="/ar/about" element={<AboutAr />}></Route>
      <Route path="/ar/login" element={<LoginAr />}></Route>
      <Route path="/ar/register" element={<RegisterAr />}></Route>
    

      {sessionStorage.getItem('logged') && <Route path ='/image' element={<UploadPage />}></Route> }
      {sessionStorage.getItem('logged') && <Route path ='/history' element={<History />}></Route> }
      {sessionStorage.getItem('logged') && <Route path ='/account' element={<Account />}></Route> }

      {sessionStorage.getItem('logged') && <Route path ='/ar/image' element={<UploadAr />}></Route> }
      {sessionStorage.getItem('logged') && <Route path ='/ar/history' element={<HistoryAr />}></Route> }
      {sessionStorage.getItem('logged') && <Route path ='/ar/Account' element={<AccountAr />}></Route> }
      <Route path ='*' element={<NotFound />}></Route>
    </Routes>

   
   </BrowserRouter>
  );
  
}

export default App;
