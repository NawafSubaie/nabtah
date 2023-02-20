import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {BsUpload} from 'react-icons/bs';
import happy_plant from './../icons/happy-plant.png'
import axios from 'axios';




function LandingPage() {

    function handleUpload() {
        if(sessionStorage.getItem('logged')) {
            window.location.href = '/ar/image'
        }
        else {
            window.location.href = '/ar/login'
        }
    }


    return (
        <Container style={{marginTop:'125px'}}>

            <Row>

                <Col className='align-self-center align-items-center justify-content-end ' >
                    <p className='landing-page-content'>إكتشاف أمراض<br /> الـنـباتات<br /> أسـهل مـن   <br /> <span style={{color:'#FF8888'}}>أي وقـتٍ مـضى </span>
                    <br />
                    <span onClick={handleUpload} className='mt-3 p-3 span-hover' style={{fontSize:'1.75rem',textAlign:'center',display:'block',background:'black',borderRadius:'15px'}}>
                        <BsUpload /> أرفع الصورة
                    </span>
                    </p>
                
                </Col>
                
                <Col className='text-end'>
                    <img src={happy_plant} />
                </Col>

            </Row>


        </Container>
    );
}

export default LandingPage;