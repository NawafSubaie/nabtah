import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import logo from './../icons/logo.png'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineLanguage} from 'react-icons/md'
import { Link } from 'react-router-dom';


function NavigationBar() {

    const [user,setUser] = useState(sessionStorage.getItem('name'))

    useEffect(() => {
        setUser(sessionStorage.getItem('name'))
        axios.get('http://localhost:5000/getCookie',{withCredentials:true})
        .then(resp => console.log(resp))
    },[])
    

    

    if(!sessionStorage.getItem('logged'))
        return (
            <Navbar className='p-3 mt-2' expand="xl" >
            <Container fluid>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
                
            <Nav>
            <Nav.Link  href="/">
                        <MdOutlineLanguage  />
                        
                    </Nav.Link>
                    <Nav.Link href="/ar/login">
                        <AiOutlineUser />
                    </Nav.Link>
                   
                    
            </Nav>
            <Nav className=" text-capatalize " style={{marginLeft:'50px'}}>
                    
                   
                     <Nav.Link href="/ar/about">عنّا</Nav.Link> 
                     <Nav.Link href="/ar/#plants">النباتات</Nav.Link>
                    <Nav.Link href="/ar/#objectives">الأهداف</Nav.Link>
                    
                   
                    <Nav.Link href="/ar">الرئيسية</Nav.Link>
                    
                    
                    
                
            </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="/ar"><img src={logo} style={{width:'200px'}}  /></Navbar.Brand>
            </Container>
        </Navbar>
        );

    else {
        return (
            <Navbar className='p-3 mt-2' expand="xl" >
            <Container fluid>
          
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
                 
            <Nav>
                <NavDropdown title={`تم تسجيل الدخول ${user}`} id="basic-nav-dropdown" style={{fontSize:'0.75em',marginTop:'10px'}}>
                    <NavDropdown.Item style={{fontsize:'0.75em'}} href="/ar/account">الحساب</NavDropdown.Item>
                    <NavDropdown.Item href="/ar/history">سجل التوقعات</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => {axios.post("http://localhost:5000/logout",{},{withCredentials:true}).then(resp => {sessionStorage.removeItem("logged");sessionStorage.removeItem("name");window.location.href = '/ar'})}}>تسجيل الخروج</NavDropdown.Item>
                </NavDropdown>
                    <Nav.Link  href="/">
                        <MdOutlineLanguage  />
                    </Nav.Link> 
            </Nav>
            <Nav className=" text-capatalize " style={{marginLeft:'50px'}}>
                    
                   
            <Nav.Link href="/ar/about">عنّا</Nav.Link> 
                     <Nav.Link href="/ar/#plants">النباتات</Nav.Link>
                    <Nav.Link href="/ar/#objectives">الأهداف</Nav.Link>
                    
                   
                    <Nav.Link href="/ar">الرئيسية</Nav.Link>
                    
                    
                    
                
            </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="/ar"><img src={logo} style={{width:'200px',marginRight:'50px'}} /></Navbar.Brand>
            </Container>
        </Navbar>
        )
    }

}

export default NavigationBar;