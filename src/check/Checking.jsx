import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./check.css";
import pdf from "./q.pdf";
export default function Checking() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [qnumPages, setqNumPages] = useState(null);
  const [qpageNumber, setqPageNumber] = useState(1);
  const [azoom, asetzoom] = useState(3);
  const [qzoom, qsetzoom] = useState(0);
  const [isqshow, setisqshow] = useState(false);
  const [textbtn, settextbtn] = useState("show qustion paper");

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const onazoom = (e) => {
    asetzoom(e.target.value);
  };
  function onqDocumentLoadSuccess({ qnumPages }) {
    setqNumPages(qnumPages);
    setqPageNumber(1);
  }

  function qfzoom() {
    setisqshow(!isqshow);
    if (isqshow === true) {
      settextbtn("show qustion paper");
      qsetzoom(4);
      asetzoom(-0);
    } else {
      settextbtn("show answer paper");
      asetzoom(3);
      qsetzoom(-0);
    }
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
          <Document file={pdf} onLoadSuccess={onqDocumentLoadSuccess}>
            <Page width="200" scale={qzoom} pageNumber={qpageNumber} />
          </Document>

          <div className="answer-sheet">
            <Document file="./semple.pdf" onLoadSuccess={onDocumentLoadSuccess}>
              <Page width="300" scale={azoom} pageNumber={pageNumber} />
            </Document>
          </div>
        </div>

        <div className="enternumber">
          not attemted <input type="checkbox" name="" id="" />{" "}
          <input type="text" />
          <br />
          not attemted <input type="checkbox" name="" id="" />{" "}
          <input type="text" />
          <br />
          not attemted <input type="checkbox" name="" id="" />{" "}
          <input type="text" />
          <br />
          not attemted <input type="checkbox" name="" id="" />{" "}
          <input type="text" />
          <br />
          not attemted <input type="checkbox" name="" id="" />{" "}
          <input type="text" />
          <br />
          not attemted <input type="checkbox" name="" id="" />{" "}
          <input type="text" />
          <br />
        </div>
      </div>
    </div>
  );
}
