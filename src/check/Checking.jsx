import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./check.css";
import pdf from "./q.pdf";
export default function Checking() {
  const [numPages, setNumPages] = useState(null);//for geting page number of pdf
  const [pageNumber, setPageNumber] = useState(1);//for current page number of pdf
  const [qnumPages, setqNumPages] = useState(null);
  const [qpageNumber, setqPageNumber] = useState(1);
  const [azoom, asetzoom] = useState(3);// for zoom
  const [qzoom, qsetzoom] = useState(0);
  const [isqshow, setisqshow] = useState(false);
  const [textbtn, settextbtn] = useState("show qustion paper");

  const elements = [];//elements is use for store input fields id and also by using map method we add n number of input feild
  let total=0
  for(let i=0;i<=10;i++)
  {
    elements.push(i);//we add id in elements
    console.log(i)
  }

function getnum(event ){
  //this function is use for geting data from input fields and also restruct user to enter only number 
document.getElementById(event.target.id).addEventListener("keyup", function (keyb) {
  console.log(keyb)
  if(keyb.keyCode===13)
  
  if(keyb.keyCode===13)
  {
    total=total+parseInt(event.target.value)// as user click enter data store for total 
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
    event.target.value=null;  // this if is use for restruct user to not enter more then max value 
    console.log("bada h")
  }
 // 

})
 console.log(event.target.value)
}



  function onDocumentLoadSuccess({ numPages }) {// as page load this function called and this function set pager number
    setNumPages(numPages);
    setPageNumber(1);
  }

  const onazoom = (e) => {
    asetzoom(e.target.value); //taking data from seek bar
  };
  function onqDocumentLoadSuccess({ qnumPages }) {
    setqNumPages(qnumPages);
    setqPageNumber(1);
  }

  function qfzoom() {
   
    if (isqshow === true) {
      settextbtn("show answer paper");
      qsetzoom(4);
      asetzoom(-0);
    } else {
      settextbtn("show qustion paper");
      asetzoom(3);
      qsetzoom(-0);
    }
    setisqshow(!isqshow);
    console.log(isqshow);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }
  return (
    <div>
      <div>
        <p className="page-show">
          {" "}
          Page {pageNumber} of {numPages}
        </p>{" "}
        {/* this line for showing page number and total page */}
        <div className="apage-button">
          {pageNumber > 1 && (
            <button onClick={changePageBack}>Previous Page</button>
          )}
          {pageNumber < numPages && (
            <button onClick={changePageNext}>Next Page</button>
          )}
        </div>
        <input
          type="range"
          id="zoom"
          onChange={onazoom}
          min="1"
          defaultValue={4}
          max="10"
          name=""
        />
        <p id="textzoom">zoom</p>
        <button id="qbt" onClick={qfzoom}>
          {textbtn}
        </button>
      </div>
      <div id="all">
        <div className="qustion-paper">
          <Document file={pdf} onLoadSuccess={onqDocumentLoadSuccess}>{/* for qustion paper */}
            <Page width="200" scale={qzoom} pageNumber={qpageNumber} />
          </Document>

          <div className="answer-sheet">
            <Document file="./semple.pdf" onLoadSuccess={onDocumentLoadSuccess}>{/* for answer paper */}
              <Page width="300" scale={azoom} pageNumber={pageNumber} />
            </Document>
          </div>
        </div>

        <div className="enternumber">
        {elements.map((value, index) => {
        return (<div key={index}>enter number <input type="text"onChange={getnum}  id={value} className='numberfield' />
        <br />
        </div>
        )
      })}

        </div>
      </div>
    </div>
  );
}
