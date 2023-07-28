import React, { useState } from "react";
import "react-phone-number-input/style.css";
// import Input from 'react-phone-number-input/input'
// import PhoneInput from "react-phone-number-input";
import "./PatientInfo.css";
import "./style.scss";
import defaultUser from "./defaultUser.jpg";

import NavigationBar from "../navbar/NavigationBar";

export default function PatientInfo() {
  const [value, setValue] = useState();
  const [val, setVal] = useState();
  const [enrolledTime, setEnrolledTime] = useState("09:00 AM");
  const [OPD, setOPD] = useState("B112");
  const [doctor, setDoctor] = useState("Dr. Adam J.");

  const [isOpen, setIsOpen] = useState(false);
  const [medicalHistory, setMedicalHistory] = useState();
  // const [isActive, setIsActive] = useState(true);

  // setEnrolledTime("");

  const MedicalHistory = () => {
    setMedicalHistory(document.getElementById("history").value);
  };

  const DisplayHistory = () => {
    document.getElementById('medical').classList.add('display');
    console.log(medicalHistory);
  };

  const HideHistory = () => {
    document.getElementById('medical').classList.remove('display');
    console.log(medicalHistory);
  };


  return (
    <>
    <NavigationBar/>
    <div className="container">
      {/* Patient Enrollment Details */}
      <div className="enrolled_details">
        <div className="enrolled_person has-text-centered">
          <img src={defaultUser} alt="patient_image" className="user-image" />
          <p id="name">M.Hassan</p>
          <p id="category">
            Patient {/* <span>&#9998;</span> */}
          </p>
        </div>
        <br />
        <div className="enrollment">
          <label htmlFor="time">Time Enrolled: </label>
          <br />
          <p id="time">{enrolledTime}</p>
    
          <label htmlFor="room">OPD Room: </label>
          <br />
          <p id="room">{OPD}</p>
          
          <label htmlFor="doctor">Discounted By: </label>
          <br />
          <p id="doctor">{doctor}</p>
        </div>
      </div>

      {/* Patient Info */}
      <div className="patient_info">
        <div className="patient_details">
          <h3>Patient Info</h3>
          <div className="row">
            <label htmlFor="FullName">Full Name: </label>
            <input
              type="text"
              name="Full_name"
              id="FullName"
              placeholder="Muhammad Hassan Waheed"
            />
          </div>

          <div className="row">
            <label htmlFor="phone">Contact No#:</label>
            <input type="text" className="phone" id="phone" placeholder="+92 345 7442650" value={value} onChange={setValue} />
            {/* <PhoneInput
              className="phone"
              id='phone'
              international
              defaultCountry="PK"
              placeholder="345 7442650"
              displayInitialValueAsLocalNumber
              value={value}
              onChange={setValue}
            /> */}
          </div>

          <div className="row">
            <label htmlFor="CNIC">CNIC:</label>
            <input
              type="tel"
              pattern="[0-9]*"
              value={val}
              onChange={(e) =>
                setVal((v) => (e.target.validity.valid ? e.target.value : v))
              }
              id="CNIC"
              placeholder="31101-5694352-2"
            />
          </div>
          <div className="row">
            <label htmlFor="dob">DOB:</label>
            <input type="date" name="DOB" id="dob" />
          </div>

          <div className="row">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="Email"
              id="email"
              placeholder="hassanwaheed_12"
            />
            <select name="domains" id="domain">
              <option value="Gmail" defaultValue>@gmail.com</option>
              <option value="Yahoo">@yahoo.com</option>
              <option value="Yahoo">@hotmail.com</option>
            </select>
          </div>
        </div>

        {/* Patient Vitals */}
        <div className="vitals">
          <div className="vital_row">
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
          <div className="vital_col BP_col">
            <label htmlFor="BP">Blood Pressure: </label>
            <input type="text" id="BP" placeholder="00.00" />
          </div>
          </div>

          <div className="vital_row">
          <div className="vital_col PR_col">
            <label htmlFor="PR">Pulse Rate: </label>
            <input type="text" id="PR" placeholder="00.00" />
          </div>
          <div className="vital_col request_col">
            <a href="/" onClick={()=>{
              alert("Device not connected!")
            }}>Request from patient device</a>
          </div>
          </div>
          <div className="addHistory">
            <button onClick={() => {
              setIsOpen(true)
              HideHistory();  
              }}>
              &#43; Add to Medical History
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="nav_buttons">
          <button className="back">Back Home</button>
          <button className="done">Done</button>
        </div>
      </div>

      {/* Patient Medical History */}
      <div className="history_div"  id="medical">
        <h3>Medical History</h3>
        <textarea
          name=""
          className="medical_history"
          cols="35"
          rows="25"
          value={medicalHistory}
        ></textarea>
      </div>

      {/* Medical History Popup */}
      {isOpen && (
        <div className="history_popUP">
          <div>
            <textarea
              name="patient_history"
              id="history"
              cols="50"
              rows="20"
              placeholder="Enter Medical History of Patient"
            ></textarea>
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              DisplayHistory();
              MedicalHistory();
            }}
          >
            Save Medical History
          </button>
        </div>
      )}
    </div>
    </>
  );
}
