import React, { useState } from "react";
import "react-phone-number-input/style.css";
// import Input from 'react-phone-number-input/input'
import PhoneInput from "react-phone-number-input";
import "./PatientInfo.css";
import './style.scss'
import defaultUser from "./defaultUser.jpg"

export default function PatientInfo() {
  const [value, setValue] = useState();
  const [val, setVal] = useState();

  return (
    <div className="container">

      {/* Patient Enrollment Details */}
      <div className="enrolled_details">
        <div className="enrolled_person has-text-centered">
          <img src={defaultUser} alt="patient_image" className="user-image" />
          <p>M.Hassan</p>
          <p>Patient <span>&#9998;</span></p> 
        </div>
        <div className="enrollment">
          <label htmlFor="time">Time Enrolled: </label>
          <br />
          <input type="text" name="time_enrolled" id="time" />
          <br />
          <label htmlFor="room">OPD Room: </label>
          <br />
          <input type="text" name="opd_room" id="room" />
          <br />
          <label htmlFor="doctor">Discounted By: </label>
          <br />
          <input type="text" name="discounted_by" id="doctor" />
        </div>
      </div>

      {/* Patient Info */}
      <div className="patient_info">
        <div className="patient_details">
          <h3>Patient Info</h3>
          <div className="row">
            <label htmlFor="FullName">Full Name: </label>
            <input type="text" name="Full_name" id="FullName" />
          </div>

          <div className="row">
            <PhoneInput
              className="phone"
              international
              defaultCountry="PK"
              placeholder="Enter phone number"
              displayInitialValueAsLocalNumber
              value={value}
              onChange={setValue}
            />
          </div>

          <div className="row">
            <label htmlFor="CNIC">CNIC</label>
            <input
              type="tel"
              pattern="[0-9]*"
              value={val}
              onChange={(e) =>
                setVal((v) => (e.target.validity.valid ? e.target.value : v))
              }
              id="CNIC"
            />
          </div>
          <div className="row">
            <label htmlFor="dob">DOB:</label>
            <input type="date" name="DOB" id="dob" />
          </div>

          <div className="row">
            <label htmlFor="email">Email: </label>
            <input type="text" name="Email" id="email" />
            <input type="text" name="domain" id="domain" />
          </div>
        </div>

        {/* Patient Vitals */}
        <div className="vitals">
          <div className="vital_col">
            <div>
              <label htmlFor="temp">Temperature: </label>
              <input type="text" id="temp" placeholder="00.00" />
            </div>
            <input type="radio" name="temperature" id="Celcious" />
            <label htmlFor="Celcious">C</label>
            <input type="radio" name="temperature" id="Faren" />
            <label htmlFor="Faren">F</label>
          </div>
          <div className="vital_col">
            <label htmlFor="BP">Blood Pressure: </label>
            <input type="text" id="BP" placeholder="00.00" />
          </div>

          <div className="vital_col">
            <label htmlFor="PR">Pulse Rate: </label>
            <input type="text" id="PR" placeholder="00.00" />
          </div>
          <div className="vital_col">
            <a href="/">Request from patient device</a>
          </div>
            <div className="addHistory">
              <button>&#43; Add to Medical History</button>
            </div>
        </div>

        {/* Navigation Buttons */}
        <div className="buttons">
          <button className="back">Back Home</button>
          <button className="done">Done</button>
        </div>
      </div>

      {/* Patient Medical History */}
      <div className="medical_history"></div>
    </div>
  );
}
