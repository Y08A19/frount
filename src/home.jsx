import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./login/logscr/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { stu } from "./login/login";
export var log = false;

export default function Home() {
  log = false;
  const openedrp = () => {
    window.location.href = "http://182.71.130.11/edrpsstc/";
  };
  var isform = null;
   var isform = "yes";
  if (stu === true)
    return (
      <div className="box">
        <div className="nave">
          <button type="button" class="but1" onClick={openedrp}>
            EDRP
          </button>
          {isform === "yes" || isform === "YES" ? (
            <Link to="/form">
              <button type="button" class=" but1">
                Form
              </button>
            </Link>
          ) : (
            
              <button type="button" class=" but1">
                Form
              </button>
            
          )}
          <button type="button" class="but1">
            {" "}
            Admit Card
          </button>
          <button type="button" class="but1">
            {" "}
            Submision{" "}
          </button>
          <button type="button" class=" but1">
            {" "}
            Admit Card
          </button>
          <Link to="/">
            <button type="button" class="    but2" onClick={(log = true)}>
              {" "}
              Logout
            </button>
          </Link>
        </div>
      </div>
    );
  else {
    return <>{stu ? null : <Navigate replace to="/" />}</>;
  }
}
