import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import plantRegister from './../icons/plant.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {FaRegEyeSlash} from 'react-icons/fa'
import {FaRegEye} from 'react-icons/fa'
import Footer from './Footer';

function Register() {

    const [phoneNumber,updatePhoneNumber] = useState('')
    const [fname,updateFName] = useState('')
    const [lname,updateLName] = useState('')
    const [password,updatePassword] = useState('')
    const [cpassword,updateCPassword] = useState('')
    const [IsRegistered,updateRegistered] = useState(false)
    const [error,updateError] = useState('')
    const [showHide, updateShowHide] = useState(false)
    const  [type,updateType] = useState('password')
    const [phoneNumberBorder,updatePhoneNumberBorder] = useState('2px solid #555c79')
    const [passwordBorder,updatePasswordBorder] = useState('2px solid #555c79')
    const [cpasswordBorder,updateCPasswordBorder] = useState('2px solid #555c79')
    //var defaultBorder = '2px solid #555c79'
    //var errorBorder = '2px solid darkred'
    //var goodBorder = '2px solid green'



    function handleRegister(e) {
        e.preventDefault()
        if(password == cpassword && password != ''){
            const validPassword = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')
            if(validPassword.test(password)) {
                const validPhone = new RegExp('^05\\d{8}$')
                if(validPhone.test(phoneNumber)) {

                    axios.post("http://localhost:5000/register",{'phone-number':phoneNumber,password,'confirm-password':cpassword,'first-name':fname,'last-name':lname},{ withCredentials: true })
                    .then((resp) => {
                        
                        if(resp.status == 200 && resp.data == 'success') {
                            updateRegistered(true)
                            setInterval(()=> window.location.href = '/login',5000)
                        }

                        else 
                            updateError('رقم الجوال مسجّل مسبقًا')
                        })
                        .catch(err => updateError('لقد حدث خطأ'))

                    updateError('')
                    updatePhoneNumberBorder('2px solid #555c79')
                    updatePasswordBorder('2px solid #555c79')
                    updateCPasswordBorder('2px solid #555c79')
            }
                else {
                    updateError('رقم الجوال يبدأ بـ05 والحد الأقصى 10 خانات')
                    updatePhoneNumberBorder('2px solid darkred')
                    updatePasswordBorder('2px solid #555c79')
                    updateCPasswordBorder('2px solid #555c79')
                }
            }

            else {
                updateError('الحد الادنى 8، حرف واحد او رقم واحد على الاقل')
                updatePasswordBorder('2px solid darkred')
                updateCPasswordBorder('2px solid darkred')
            }
            
        }
        else {
            updatePasswordBorder('2px solid darkred')
            updateCPasswordBorder('2px solid darkred')
            updateError('كلمة المرور والتأكيد غير متطابقتان')
        }


    }


    return (
       <>
       <NavigationBar />

 
         <Container style={{marginTop:'75px'}}>
 
        
            <Row className='justify-content-center'>
                <Col className='align-items-center align-self-center'>
                    <h1 className='Poppins text-left'>التسجيل</h1>
                            <Form className='mt-5'>

                            <FloatingLabel controlId="floatingInput"  label="الاسم الاول" className="mb-3">
                                    <Form.Control type="text" name="first-name"  className='shadow-none' style={{border:'2px solid #555c79'}} placeholder="First name" onChange={((e)=> updateFName(e.target.value) )}/>
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput"  label="اسم العائلة" className="mb-3">
                                    <Form.Control type="text" name="last-name"  className='shadow-none ' style={{border:'2px solid #555c79'}} placeholder="Last name" onChange={((e)=> updateLName(e.target.value) )}/>
                                </FloatingLabel>
                                
                                <FloatingLabel controlId="floatingInput"  label="رقم الجوال" className="mb-3">
                                    <Form.Control type="email" name="phone-number"   className='shadow-none ' style={{border:phoneNumberBorder}} placeholder="05********" onChange={((e)=> updatePhoneNumber(e.target.value) )}/>
                                    <Form.Text id="passwordHelpBlock" muted>
                                        مثال: 0557345192
                                    </Form.Text>
                                </FloatingLabel>
                                

                                <FloatingLabel controlId="floatingInput"  label="كلمة المرور" className="mb-3">
                                    <Form.Control type={type} className='shadow-none' name="password" style={{border:passwordBorder}} placeholder="12345678" onChange={((e)=> updatePassword(e.target.value) )} />
                                    {!showHide?<FaRegEyeSlash className='hide-show-password' style={{fill:'#555c79'}} onClick={(e) => {updateType('text');updateShowHide(!showHide)}}/>: <FaRegEye onClick={(e) =>{updateType('password');updateShowHide(!showHide)}} className='hide-show-password' /> }
                                    <Form.Text id="passwordHelpBlock" muted>
                                       الحد الادنى 8، حرف واحد او رقم واحد على الاقل
                                    </Form.Text>
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingInput"  label="تأكيد كلمة المرور" className="mb-3">
                                    <Form.Control type={type} name="confirm-password"  className='shadow-none ' style={{border:cpasswordBorder}} placeholder="name@example.com" onChange={((e)=> updateCPassword(e.target.value) )} />
                                    {!showHide?<FaRegEyeSlash className='hide-show-password' style={{fill:'#555c79'}} onClick={(e) => {updateType('text');updateShowHide(!showHide)}}/>: <FaRegEye onClick={(e) =>{updateType('password');updateShowHide(!showHide)}} className='hide-show-password' /> }
                                </FloatingLabel>
                                <br />
                                <Button variant="dark" type="submit" onClick={handleRegister}>
                                سجّل
                                </Button>
                        </Form>
                       
                </Col>
                <Col className='text-end align-items-center align-self-center'>
                    <img src={plantRegister} style={{width:'400px',height:'400px'}} />
                </Col>
            </Row>
            <br />
            {error && <Alert variant='danger'>
                {error}
            </Alert>}

            {IsRegistered && <Alert className='mt-3' variant='success'>
                لقد تم تسجيلك بنجاح، قم بالعودة الى صفحة الدخول <Link to='/login'>تسجيل الدخول</Link>
            </Alert>}
         </Container>
         <Footer />

       </>
        
 
 
     );
}

export default Register;