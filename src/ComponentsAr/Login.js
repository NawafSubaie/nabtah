import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState,useLayoutEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import plant_pot from './../icons/plant-pot.png';
import {FaRegEyeSlash} from 'react-icons/fa'
import {FaRegEye} from 'react-icons/fa'
import Footer from './Footer'


function Login() {


    const [user,setUser] = useState('')
   
    

    const [phoneNumber,updatePhoneNumber] = useState('')
    const [password,updatePassword] = useState('')
    const [remember,updateRemember] = useState('')
    const [error,updateError] = useState('')
    const [serverDown,updateServerDown] = useState('')
    const [showHide, updateShowHide] = useState(false)
    const  [type,updateType] = useState('password')

    

    function changeEmail(e) {
        updatePhoneNumber(e.target.value)
    }

    function changePassword(e) {
        updatePassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const responds =   axios.post("http://localhost:5000/login",{'phone-number':phoneNumber,password,remember},{ withCredentials: true })
                         .then(resp => {
                            if(resp.status == 200 && resp.data != 'error') {
                                sessionStorage.setItem('logged', true);
                                sessionStorage.setItem('name',resp.data)
                                console.log(resp)
                                window.location.href = '/ar'
                            }

                            else {
                                updateError('Wrong Email or Password')
                            }
                            
                         }).catch(err => updateServerDown('Something wrong happened, it was not your fault !'))
    }

    


    return (
       <>
       
        <NavigationBar />
      
        <Container  style={{marginTop:'75px'}} >

            <Row  className='justify-content-center'>
                <Col className='align-items-center align-self-center'>
                    <h1 className='text-left Poppins'>تسجيل الدخول</h1>
                    <Form className='mt-5'>
                        <FloatingLabel controlId="floatingInput"  label="رقم الجوال" className="mb-3">
                            <Form.Control type="email" name="phone-number"  className='shadow-none ' placeholder="name@example.com" onChange={(e) => updatePhoneNumber(e.target.value)} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput"  label="كلمة المرور" className="mb-3">
                            <Form.Control type={type} className='shadow-none' name="password" placeholder="12345678" onChange={(e) => updatePassword(e.target.value)} />
                            {!showHide?<FaRegEyeSlash className='hide-show-password' style={{fill:'#555c79'}} onClick={(e) => {updateType('text');updateShowHide(!showHide)}}/>: <FaRegEye onClick={(e) =>{updateType('password');updateShowHide(!showHide)}} className='hide-show-password' /> }
                        </FloatingLabel>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" name="remember" label="تذكّرني" onChange={(e) => updateRemember(e.target.value)} />
                        </Form.Group>
                        <Button variant="dark" type="submit" onClick={handleSubmit}>
                            الدخول
                        </Button>
                        <br />
                        <br />
                        <Form.Text>
                        ليس لديك حساب؟ <Link to='/ar/register'>سجّل هنا</Link>
                        </Form.Text>
                    </Form>
                </Col>
                  
                <Col className='text-right' >
                <img src={plant_pot} style={{height:'400px',width:'400px',float:'right'}} />
                </Col>
            </Row>

        <br />
        {error && <Alert className='mt-3'  variant='danger'>
                                        {error}
                        </Alert>}
        {serverDown && <Alert className='mt-3'  variant='info'>
                    {serverDown}
                    </Alert>}

        </Container>
        <Footer />


        {/* <Container style={{marginTop:'50px'}}>

       
            <Form className='text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{textAlign:'left'}} type="email" name="email" placeholder="Enter email" onChange={changeEmail} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{textAlign:'left'}} type="password" name="password" placeholder="Password" onChange={changePassword} />
                </Form.Group>

                <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicCheckbox">
                    <Form.Check className='p-2' type="checkbox" name='remember' label="Remember Me" onChange={(e) => updateRemember(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
            {error && <Alert className='mt-3'  variant='danger'>
                                        {error}
                        </Alert>}
        </Container> */}
       </>
       


    );
}

export default Login;