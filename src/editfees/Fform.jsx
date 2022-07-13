import React from 'react'
import "./Fform.css"
import { adminid,sname,fname,urollno,spec,branch,sem } from '../temp/Temp'
export default function Fform() {
 
  return (
    <div>
      
<div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
  <div className="wrapper wrapper--w680">
    <div className="card card-4">
      <div className="card-body">
        <h2 className="title">Fee Form</h2>
        <form method="POST">
          <div className="row row-space">
            <div className="col-2">
              <div className="input-group">
                <label className="label">Student Name</label>
                <input
                  className="input--style-4"
                  type="text"
                  name="first_name"
                  value={sname}
                  onChange={sname}
                />
              </div>
            </div>
            <div className="col-2">
              <div className="input-group">
                <label className="label">Student ID</label>
                <input
                  className="input--style-4"
                  type="text"
                  name="Student-ID"
                  value={adminid}
                />
              </div>
            </div>
          </div>
          <div className="input-group">
            <label className="label">Semester</label>
            <div className="rs-select2 js-select-simple select--no-search">
              <select name="subject">
                <option disabled="disabled" selected="selected"  value={sem}>
                  Choose option
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
              <div className="select-dropdown" />
            </div>
          </div>
          <div className="row row-space">
            <div className="col-2">
              <div className="input-group">
                <label className="label">Reciept Number</label>
                <input className="input--style-4" type="text" name="email" />
              </div>
            </div>
            </div>
            <hr></hr>
          <div className="input-group">
            <label className="label">Admin Grant</label>
            <div className="rs-select2 js-select-simple select--no-search">
              <select name="subject">
                <option disabled="disabled" selected="selected">
                  Choose option
                </option>
                <option>Yes</option>
                <option>No</option>
                
              </select>
              <div className="select-dropdown" />
            </div>
          </div>

          <div className="p-t-15">
            
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

