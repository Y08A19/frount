import Login from "./login/login.jsx"
import Home from "./home"
import Rgform from "./Rgform";
import ADhome from "./ADhome "
import TEChome from "./TEChome "

import React ,{useState}from "react";
import  Admit from "./login/Admit.jsx"
import Fees from "./login/Fees/Fees.jsx";
import Assign from "./edit/Assign.jsx";



//<Login data={getuserpass} />


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 var imgi
  const [duser,dsetuser]=useState({
    dadid:"",dfullname:"",dUniversityroll:"",dSectionroll:"",dSemester:"",dGender:"",dEmail:"",dAddress1:"",dAddress2:"",dCity:""
,dStates:"",dBranch:"",dZip_Code:"" ,dfather:"" })
  function form(  adid,fullname,Universityroll,Sectionroll,Semester,Gender,Email,Address1,Address2,City,States,Branch,Zip_Code,father)
  {
   dsetuser({...duser,dadid:adid,dfullname:fullname,dUniversityroll:Universityroll,dSectionroll:Sectionroll,dSemester:Semester,dGender:Gender,dAddress1:Address1,dAddress2:Address2,
    dCity:City,dStates:States,dBranch:Branch,dZip_Code:Zip_Code,dfather:father})
  }
  

  function imgfein1(img)
  {
imgi=img

  }
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login  /> } />
          <Route path="/Home" element={<Home />} />
          <Route path="/adHome" element={<ADhome/>} />
          <Route path="/tecHome" element={<TEChome />} />
          <Route path="/Form" element={<Rgform fdata={form} />} />
          <Route path="/Admit" element={<Admit ddata={duser} />} />
          <Route path="/Fees" element={<Fees  img1={imgfein1} /> } />
          <Route path="/assign" element={<Assign oppo={imgi}/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
