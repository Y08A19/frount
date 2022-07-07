import React ,{useState}from "react";
import Home from "./home";
import "./login/logscr/rgcss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link,Navigate } from "react-router-dom";
import { stu } from './login/login';

export default function Rgform(props) {
  if(stu===false)
  {
    window.location.href = "/";
  }
  const [user,setuser]=useState({
    adid:"",fullname:"",Universityroll:"",Sectionroll:"",Semester:"",Gender:"",Email:"",Address1:"",Address2:"",City:""
,States:"",Branch:"",Zip_Code:"",father:""  })
let namef,valuef;

const handleinput=(event)=>{

namef=event.target.name
valuef=event.target.value

setuser({...user,[namef]:valuef})
}
const isprass=()=>{
  props.fdata( user.adid,user.fullname,user.Universityroll,user.Sectionroll,user.Semester,user.Gender,user.Email,user.Address1,user.Address2,user.City,user.States
    ,user.Branch,user.Zip_Code,user.father);
  
}
if(stu===true)return (
    <div>
      
      <Home />
      <div class="container main">
        <form className="needs-validation">
        <div className="admission">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text lbadid"
                    id="inputGroup-sizing-default"
                  >
                    Admission ID
                  </span>
                </div>
                <input
                  required
                  type="text"
                  className="form-control inadid "
                  aria-label="Default"
                  placeholder="Admission ID"
                  aria-describedby="inputGroup-sizing-default"
                  name="adid"
                  value={user.adid}
                  onChange={handleinput}
                />
              </div>
            </div>

            <div className="fullname">
              <div className="input-group mb-3">
                <span className="input-group-text spfn" id="basic-addon1">
                  Full Name
                </span>
                <input
                  required
                  type="text"
                  className="form-control infn"
                  placeholder="Full Name"
                  aria-label="Full Name"
                  name="fullname"
                  value={user.fullname}
                  onChange={handleinput}
                />
              </div>
            </div>

            <div className="universityroll">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  University Roll No
                </span>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="University Roll No"
                  aria-label="University Roll No"
                  value={user.Universityroll}
                  onChange={handleinput}
                  name="Universityroll"
                />
              </div>
            </div>
         
            <div className="sectionrollno">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Section Roll No
                </span>
                <input
                  required
                  type="number"
                  name="Sectionroll"
                  min="1"
                  max="200"
                  className="form-control input-secrn"
                  placeholder="Section Roll No"
                  aria-label="Section Roll No"
                  value={user.Sectionroll}
                  onChange={handleinput}
                
                />
              </div>
            </div>

            <div className="fathername">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  father name
                </span>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  aria-label="Full Name"
                  name="father"
                  value={user.father}
                  onChange={handleinput}
                />
              </div>
            </div>
            

            <div className="semester">
              <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Semester
                </span>

                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  required
                  name="Semester"
                  value={user.Semester}
                  onChange={handleinput}
                >
                  <option>1</option>
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

            <div className="Gender">
              <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Gender
                </span>

                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  required
                  name="Gender"
                  value={user.Gender}
                  onChange={handleinput}
                >
                  <option selected></option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
         
            <div class="Email">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Email
                </span>
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder=" Email"
                  aria-label=" Email"
                  name="Email"
                  value={user.Email}
                  onChange={handleinput}
                />
              </div>
            </div>

            <div class="Address1">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Address
                </span>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  aria-label="Address"
                  name="Address1"
                  value={user.Address1}
                  onChange={handleinput}
                />
              </div>
            </div>
         
            <div class="Address2">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Address
                </span>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  aria-label="Address"
                  name="Address2"
                  value={user.Address2}
                  onChange={handleinput}
                />
              </div>
            </div>

            <div class="City">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  City
                </span>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="City"
                  aria-label="City"
                  name="City"
                  value={user.City}
                  onChange={handleinput}
                />
              </div>
            </div>

            <div class="States">
              <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  States
                </span>

                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  required
                  name="States"
                  value={user.States}
                  onChange={handleinput}
                >
                  <option selected>Choose...</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jammu and Kashmir</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                </select>
              </div>
              </div>
         
              <div class="Branch">
              <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Branch
                </span>

                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  required
                  name="Branch"
                  value={user.Branch}
                  onChange={handleinput}
                >
                  <option selected>Choose...</option>
                  <option>Architecture</option>
                  <option>B.Pharma Pradesh</option>
                  <option>IT</option>
                  <option>Mechanical</option>
                  <option>CSE</option>
                </select>
              </div>
            </div>

            <div class="Zip-Code">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Pin Code
                  </span>
                </div>
                <input
                  required
                  type="text"
                  className="form-control"
                  aria-label="Default"
                  placeholder="PIN Code"
                  aria-describedby="inputGroup-sizing-default"
                  name="Zip_Code"
                  value={user.Zip_Code}
                  onChange={handleinput}
                />
              </div>
            </div>
          
            <div class="kuch">
              <div class="form-check form-check-inline">
                <input
                  required
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  defaultValue="option1"
                  
                 
                />
                 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                <label className="form-check-label " htmlFor="inlineRadio1">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" required></input>
                 {" "} I hereby declare that all the information here is correct!
                </label>
              </div>
            </div>

            <div className="next">
            <Link to="/fees">
              <button class="btn btn-outline-dark" onClick={isprass}  type="submit" >
                Next
              </button>
              </Link>
            </div>
          
        </form>
      </div>
    </div>
  ); else
  { return (
    <>
    {stu? null : (<Navigate replace to="/" />)}
    </>
  )

    }
}
