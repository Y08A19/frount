import React from 'react'
import { Link } from "react-router-dom";
import "./login/logscr/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ass } from './ADhome ';
export default function Home() {
  console.log(ass)
  
  return (
    <div className='box'>
      <div className="nave">
      <button type="button" class="btn btn-light  btn-lg but1">EDRP</button>
     <Link to="/form"><button type="button" class="btn btn-light  btn-lg but1">exam papers</button></Link> 
     <Link to="/candad"><button type="button" class="btn btn-light  btn-lg but1">fees form</button></Link> 
     <Link to="/form"><button type="button" class="btn btn-light  btn-lg but1">report</button></Link> 
      <button type="button" class="btn btn-light  btn-lg but1"> update</button>

      <Link to="/"><button type="button" class="btn btn-outline-warning  btn-lg but2"> Logout</button></Link>
      </div>
     
      
      
    </div>
  )
}

