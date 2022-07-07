import React from 'react'
import { Link } from "react-router-dom";
import "./login/logscr/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export var ass
export default function Home() {
const assign=()=>{
ass=true
}
ass=false
  return (
    <div className='box'>
      <div className="nave">
      <button type="button" class="btn btn-light  btn-lg but1">EDRP</button>
     <Link to="/form"><button type="button" class="btn btn-light  btn-lg but1">Upload Paper</button></Link> 
      <button type="button" class="btn btn-light  btn-lg but1"> assigen paper</button>
      <button type="button" class="btn btn-light  btn-lg but1"> Info </button>
      <button type="button" class="btn btn-light  btn-lg but1"> check </button>
      <Link to="/assign"><button type="button" class="btn btn-light  btn-lg but1">Upload Paper</button></Link> 
      <Link to="/"><button type="button" class="btn btn-outline-warning  btn-lg but2"> Logout</button></Link>
      </div>
      <button type="button" class="btn btn-light  btn-lg but1" onClick={assign}> Info </button>
      
    </div>
  )
}

