import React, { useState } from 'react';
import logo from '../images/company_logo.png';
import doctorimage from '../images/doctor_profile_picture.png';
import search_icon from '../images/search_icon.png';
import opd from '../images/opd.png';
import report from '../images/report.png';
import lab from '../images/lab.png';
import './NavigationBar.css';

const NavigationBar = () => {
  const doctorName = "Dr. Sara"; // Replace this with the actual doctor's name

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navigation-bar">
      <ul className="navbarlist">
        <li><img src={logo} alt="Company Logo" className="logo" /></li>
        <li>
          <input type="text" placeholder="Type in to Search......." className="search-bar" />
          <a className='search_icon' href='/'><img src={search_icon} alt="search image" /></a>
        </li>
        <li className='opd pagenavigation'><a href='/'><img className='opd_img' src={opd} alt="" />OPD</a></li>
        <li className='report pagenavigation'><a href='/'><img className='report_img' src={report} alt="" />Report</a></li>
        <li className='lab pagenavigation'><a href='/'><img className='lab_img' src={lab} alt="" />Lab</a></li>
        <li className="user-profile">
          <button onClick={toggleDropdown}>
            <img src={doctorimage} alt="Doctor Profile" />
            {doctorName}
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li className="profile"> <a href='/'>Dr. Sara</a></li>
                <li className="setting"><a href='/'>Setting</a></li>
                <li className="logout"><a href='/'>Logout</a></li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
