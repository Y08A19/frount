import React from 'react'
import "./assign.css"

export default function Assign() {
  return (
    <div>
     <div className="home">
        <div className='row'>
       <div className='col-md'>
       <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                authority
                </span>

                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  required
                  name="Semester"
                 
                >
                  <option></option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
       </div>
        </div>
        </div> 
    </div>
  )
}
