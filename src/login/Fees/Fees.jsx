import React,{  useState } from 'react'
import "./Fees.css"
import { Link,Navigate } from "react-router-dom";
import ImageUploadPreviewComponent from "../imagein/ImageUploadPreviewComponent"
import { stu } from '../login';
export var op,op2



export default function Fees() {
  if(stu===false)
  {
    window.location.href = "/";
  }
  const [file, setFile] = useState(null);
  const [fi, setFi] = useState([]);
    //var op,op2
    
   
    function addphoto( temp){

setFi(temp)
    }
    function addphoto1( temp){
    
      
      setFile(temp)
      
          }
  
    
op=fi
op2=file

  if(stu===true)return (
    <div>
      <div className="cardo">
<div className="imin">
<ImageUploadPreviewComponent data={addphoto}/>  
  </div>  
  
  <div className="imin2">
<ImageUploadPreviewComponent data={addphoto1}/>  
  </div> 

 

 <Link to="/Admit">
              <button class="btn btn-outline-dark but"   type="submit">
                Next
              </button>
              </Link>
      </div>
     
    </div>
  )
  else
  { return (
    <>
    {stu? null : (<Navigate replace to="/" />)}
    </>
  )

    }
}
