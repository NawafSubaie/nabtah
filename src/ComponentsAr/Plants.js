import React from 'react';
import {RiPlantFill} from 'react-icons/ri';
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {GiCherry,GiCorn,GiGrapes,GiChiliPepper,GiPotato,GiTomato} from 'react-icons/gi'

function Plants() {
    return (
        
        <Container id='plants' fluid className='pt-3 pb-3' style={{marginTop:'95px'}}>


            <Row>
                <Col className='text-center'>
                    <h1 className='Poppins' style={{color:'#007096'}}>النـباتات المدعومة</h1>
                </Col>
            </Row>
            <Row className='justify-content-center' style={{margin:'95px'}}>
                <Col className='text-center' md={3}>
                    <GiCherry className='plant-icon m-3' />
                    <h3 className='Poppins mt-2 plant-title'>الكرز</h3>
                    <small className='form-text'>الصحيّة و البياض الدقيقي</small>
                </Col>
                <Col className='text-center' md={3}>
                    <GiCorn className='plant-icon m-3' />
                    <h3 className='Poppins mt-2 plant-title'>الذرة</h3>
                    <small className='form-text'>الصحيّة و الصدأ الشائع</small>
                </Col>
                <Col className='text-center' md={3}>
                    <GiGrapes className='plant-icon m-3' />
                    <h3 className='Poppins mt-2 plant-title'>العنب</h3>
                    <small className='form-text'>الصحيّة و الحصبة السوداء و العفن الأسود</small>
                </Col>
            </Row>

            <Row className='justify-content-center' style={{margin:'95px'}}>
                <Col className='text-center' md={3}>
                    <GiChiliPepper className='plant-icon m-3' />
                    <h3 className='Poppins mt-2 plant-title'>الفلفل</h3>
                    <small className='form-text'>الصحيّة</small>
                </Col>
                <Col className='text-center' md={3}>
                    <GiPotato className='plant-icon m-3' />
                    <h3 className='Poppins mt-2 plant-title'>البطاطس</h3>
                    <small className='form-text'>الصحيّة</small>
                </Col>
                <Col className='text-center' md={3}>
                    <GiTomato className='plant-icon m-3' />
                    <h3 className='Poppins mt-2 plant-title'>الطماط</h3>
                    <small className='form-text'>الصحيّة</small>
                </Col>
            </Row>


        </Container>


    );
}

export default Plants;