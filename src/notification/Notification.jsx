import React,{useEffect} from 'react'
import "./notification.css"
import sound from "./s1.mp3"
import ReactAudioPlayer from 'react-audio-player';
export default function Notification() {
  const elements = [];
  let total=0
  for(let i=0;i<=4;i++)
  {
    elements.push(i);
    console.log(i)
  }

function getnum(event ){
document.getElementById(event.target.id).addEventListener("keyup", function (keyb) {
  console.log(keyb)
  if(keyb.keyCode===13)
  
  if(keyb.keyCode===13)
  {
    total=total+parseInt(event.target.value)
    console.log("enter")
    console.log(total)
    
  }
  if(keyb.keyCode>=65&& keyb.keyCode<=90)
  {console.log("alpha")
   // alert("you cant enter alpha numaric valu");
    keyb.preventDefault();
    event.target.value=null;

  }else{
    total=total+parseInt(event.target.value)
  }
  if(parseInt(event.target.value)>19)
  {
    event.target.value=null;
    console.log("bada h")
  }
 // 

})
 console.log(event.target.value)
}

function pl(){
  document.getElementById("rap").play();
}

  return (
    <div>
      <div className='notification'>
      <ReactAudioPlayer id='rap'
  src={sound}
  autoPlay
  controls

  

/>

{elements.map((value, index) => {
        return (<div key={index}>enter number <input type="text"onChange={getnum}  id={value} className='numberfield' />
        <br />
        </div>
        )
      })}

<button onClick={pl}>hii</button>
      </div>
    </div>
  )
}
