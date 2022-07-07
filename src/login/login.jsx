import React, { useState } from "react";
import "./logscr/log.css";
import { Link } from "react-router-dom";
import { log } from "../home";
export var stu=false

export default function Login() {
  function preback(){
    window.history.forward();
  }
  setTimeout(preback(),0);
  window.onunload=()=>null;
if(log===true){
  stu=false
}
   const [datauser, getdatauser] = useState("");
   const [datapass, getdatapass] = useState("");
   const [hurl, gethurl] = useState("");


function isprass(){
 
  
  <Link to={`${hurl}`}/>
}


  function getDatauser(event) {
  
    getdatauser(event.target.value)
    checksuss()
    
 
  }
  function getDatapass(event) {
  
    getdatapass(event.target.value)
    checksuss()
   
  }
function checksuss(){

if(datapass.length!==0&&datauser.length!==0)
{
 

}
if(datauser==="tech"&&datapass==="1234")
 { gethurl("adHome")}
  else
  if(datauser==="admin"&&datapass==="1234")
  {gethurl("tecHome")}
  else
  if(datauser==="student"&&datapass==="1234")
 { gethurl("Home")
 stu=true

}
  
 
  
}

  return (
    <div className="card">
    
      <div className=" logo"></div>
      <div className="wrapper">
        <div className="input-data">
          <input id="userid" type="text" className=" is-valid" onChange={getDatauser} required />
          <div className="underline" />
          <label>UserId</label>
        </div>
      </div>
      <div className="wrapperp">
        <div className="input-data">
          <input id="pass" type="password" onChange={getDatapass} required />
          <div className="underline" />
          <label>password</label>
        </div>
      </div>
      <div></div>
      <div className="butt">
     <Link to={`${hurl}`} ><button id="butto"  type="button" onClick={isprass} >
          LogIn
        </button></Link>
      
      </div>
    </div>
  );
}
