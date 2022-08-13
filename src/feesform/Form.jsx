import React from "react";
import "./Form.css";
import { adminid, sname, urollno, branch, sem } from "../student-fees/StudentFees";
export var isfees;
export default function Form() {
  return (
    <div className="Start">
      <div className="Formf">
        <form>
          <div className="StudentID">
            <label htmlFor="fname">Student-ID: </label>
            <input
              type="text"
              id="sid"
              name="studid"
              required="required"
              value={`${adminid}`}
            />
          </div>
          <div className="StudentName">
            <label htmlFor="lname">S-Name: </label>
            <input
              type="text"
              id="sname"
              required="required"
              name="studname"
              value={`${sname}`}
              placeholder="ABC"
            />
          </div>
          <div className="rolid">
            <label htmlFor="fname">Student-Roll number: </label>
            <input
              type="text"
              id="sid"
              name="studid"
              required="required"
              value={`${urollno}`}
            />
          </div>

          <div className="Semester">
            <label htmlFor="lname">Semester: </label>
            <input
              type="text"
              id="sem"
              required="required"
              name="semstr"
              value={`${sem}`}
              placeholder="1,2,3..."
            />
          </div>
          <div className="branch">
            <label htmlFor="lname">branch: </label>
            <input
              type="text"
              id="sem"
              required="required"
              name="semstr"
              value={`${branch}`}
              placeholder="1,2,3..."
            />
          </div>
          <div className="Registration">
            <label htmlFor="lname">Reciept No.: </label>
            <input type="text" id="rn" name="rnn" />
          </div>
          <hr />

          <div className="AdminG">
            <label htmlFor="lname">Admin Grant: </label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Type YES"
            />
          </div>
          <div className="Subbttn">
            <input type="submit" defaultValue="Submit" />
          </div>
        </form>
      </div>
      {/* //Form ends here */}
    </div>
  );
}
