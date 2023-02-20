import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './css/NavigationBar.css';
import './css/Login.css';
import './css/Plants.css';
import './css/UploadImage.css';
import './css/PredictionResult.css';
import './css/About.css';
import './css/Account.css';
import AppAr from './ComponentsAr/AppAr';
import reportWebVitals from './ComponentsEn/reportWebVitals';
import Home from './ComponentsEn/Home'; // not used
import Nav from './ComponentsEn/NavigationBar'; // not used
import AppEng from './ComponentsEn/App'

document.addEventListener("DOMContentLoaded", function(event) { 
  // get element by ID
     var lang = document.getElementById("changeLanguage");
     lang.addEventListener("onclick",()=>{console.log('hi')})
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppEng />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
