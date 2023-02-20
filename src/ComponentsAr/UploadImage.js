import React from 'react';
import NavigationBar from './NavigationBar';
import { useState,useEffect,useRef } from 'react';
import axios from 'axios';
import {BsUpload} from 'react-icons/bs';
import { Button, Col, Container, Row, Alert } from 'react-bootstrap';
import { FileUploader } from "react-drag-drop-files";
import PredictionResult from './PredictionResult';
import Footer from './Footer';
import {Spinner} from 'react-bootstrap'


const fileTypes = ["JPEG", "PNG","JPG"];
function UploadPage() {

    const [visible, setVisible] = useState(false)
    const [file, setFile] = useState(null);
    const [URLState,setURL] = useState(null)
    const [apiResult, updateResult] = useState(null)
    const [err,updateErr] = useState(false);
    const [errUpload,updateErrUpload] = useState(null)
    const [waitingResult,setWaitingResult] = useState(false)

    useEffect(() => {
      setVisible(true)
      console.log(visible)
      console.log(apiResult)
    },[apiResult])

    const handleChange = (file) => {
      console.log(file)
      var reader = new FileReader();
      var url = URL.createObjectURL(file)
      setURL(url)
      setFile(file);
    }

     async function handlePrediction(e) {

      if (file != null){

        const fd = new FormData()
        fd.append('img',file,file.name)
        setWaitingResult(true)
        console.log(fd)
         await axios.post('http://localhost:5000/image',fd,{withCredentials:true})
        .then(res => {
            
            console.log(res.data)
            updateResult(res.data)
            setWaitingResult(false)

        }).catch(err => updateErrUpload('حجم الصورة كبير جدا!.'))
            setWaitingResult(false)
    }

    else {
      updateErr(true)
      setWaitingResult(false)
    }

    

    } 


    if(apiResult == null)

    return (
        
        <>
        <NavigationBar />
       
        <Container className="justify-content-center text-center bg-light p-3" style={{borderRadius:'35px',marginTop:'75px'}}>
        <h1 className='text-capitalize text-center pb-2 mb-4' style={{fontWeight:'lighter',color:'#212529',fontSize:'3.5rem',marginTop:'55px'}}>أرفق صورتك هنا</h1>
      <FileUploader
        id="test"
        handleChange={handleChange}
        name="img"
      
      />
      <br />
      {errUpload != null &&<Alert style={{width:'30%',margin:'auto'}} variant='warning'>{errUpload}</Alert> }
      <br />
      {URLState && <img style={{width:'256px',height:'256px'}} src={URLState} />}
      <br />
      <p style={{fontFamily:'Poppins',fontWeight:'lighter'}}>{file ? `اسم الملف: ${file.name}` : "لم ترفق صورتك"}</p>
      
      <Row className='d-flex'>
        {waitingResult && <Spinner animation="border" variant="dark" style={{margin:'auto'}}/>}
      </Row>

      <Row className='justify-content-center'>
      <Col style={{fontFamily:'Poppins'}} ><Button variant='dark' className='m-3' onClick={handlePrediction}>توقع مرض النبتة\اكتشف ماهي النبتة</Button> 
      
      </Col>
      
      </Row>
      {err &&<Alert style={{width:'30%',margin:'auto'}} variant='warning'>لم ترفق صورة نبتة!</Alert> }
      
    </Container>
    <Footer />
        </>
    );

    else {
      return (
              <>
              <NavigationBar />
              <PredictionResult plantName = {apiResult.plant_name_ar} diseaseName={apiResult.disease_ar} probability = {(100* apiResult.probability).toFixed(1)} imgSRC = {URLState} description = {apiResult.description_ar} treatment = {apiResult.treatment_ar} /> 
              <Footer />
              </>
               
      );
      
    }

   
    
}

export default UploadPage;