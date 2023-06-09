import React, { useState, useEffect } from "react";
import "../styles/newnavbar.css";
import Videos from "../assets/HM final.mp4";
import Logo from "../assets/Logo.png";
import MobileImage from "../assets/bg4.jpg";
import { Link } from "react-router-dom";

const initialData = { location: "", vtype: "" , vmodel: "" , vnumber: "" , issue: "" , address: "" }

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bgSize, setBgSize] = useState('110vh'); // initialize the background image size
  const [data, setData] = useState(initialData);
  const [location, setlocation] = useState('');
  const [isValidLocation, setIsValidLocation] = useState(false);
  const [vtype, setvtype] = useState('');
  const [isValidVtype, setIsValidVtype] = useState(false);
  const [vmodel, setvmodel] = useState('');
  const [isValidVmodel, setIsValidVmodel] = useState(false);
  const [vnumber, setvnumber] = useState('');
  const [isValidVnumber, setIsValidVnumber] = useState(false);
  const [issue, setissue] = useState('');
  const [isValidIssue, setIsValidIssue] = useState(false);
  const [address, setaddress] = useState('');
  const [isValidAddress, setIsValidAddress] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowForm(true), 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 992);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleClick() {
    setBgSize('130vh'); // set the new background image size
  }

  return (
    <>
      <header>
        {" "}
        <nav
          className={`navbar containernavbar navbar-expand-lg navbar-light nav-color ${isMobile ? "mobile-nav" : ""
            }`}
        >
          <Link className="navbar-brand" to="#/">
            {" "}
            <img
              src={Logo}
              alt="logo"
              className="img-fluidnavbar"
              style={{ width: "70px", height: "70px", marginLeft: "20px" }}
            />
          </Link>
          <span
            className="centrenavbar"
            style={{
              fontSize: "17px",
              color: "white",
              marginRight: isMobile ? "20px" : "0",
            }}
          >
            For Unstoppable <br />
            Journey
            <span
              className="centrenavbar1"
              style={{
                fontSize: "17px",
                color: "white",
                marginLeft: isMobile ? "30px" : "0",
              }}
            >
            </span>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HM Store
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About Us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <Link to="/LoginPage">
                  <button
                    type="submit"
                    className="css-button-arrow--red buttonnavbar"
                  >
                    Login
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gotocart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Link>
              </li>
            </ul>

          </div>
        </nav>
      </header>
      {isMobile ? (
        <div className="mobile-image" onClick={handleClick}>
          <img src={MobileImage} alt="mobile-background" style={{ height: bgSize }} />
          <div className="maincontainerform123">
            <form className="container-navbar-form" action="#!" method="post">
              <div className="card-navbar">
                <Link className="signgup-navbar" href="#!">Hire A Mechanic</Link>
                <div className="inputBox1-navbar">
                  <input type="text" value={location} onChange={e => {
                    setlocation(e.target.value)
                    const locationRegex = /^[a-zA-Z0-9]+$/;
                    setIsValidLocation(locationRegex.test(e.target.value));
                    setData({ location: e.target.value, vtype: vtype, vmodel: vmodel, vnumber: vnumber, issue: issue, address: address })
                  }} required="required" />
                  <span className="user-navbar">Location</span>
                </div>
                <div className="inputBox1-navbar">
                  <input type="text" value={vtype} onChange={e => {
                    setvtype(e.target.value)
                    const vtypeRegex = /^[a-zA-Z0-9]+$/;
                    setIsValidVtype(vtypeRegex.test(e.target.value));
                    setData({ location: location, vtype: e.target.value, vmodel: vmodel, vnumber: vnumber, issue: issue, address: address })
                  }} required="required" />
                  <span className="user-navbar">Vehicle Type</span>
                </div>
                <div className="inputBox1-navbar">
                  <input type="text" value={vmodel} onChange={e => {
                    setvmodel(e.target.value)
                    const vmodelRegex = /^[a-zA-Z0-9]+$/;
                    setIsValidVmodel(vmodelRegex.test(e.target.value));
                    setData({ location: location, vtype: vtype, vmodel: e.target.value, vnumber: vnumber, issue: issue, address: address })
                  }} required="required" />
                  <span className="user-navbar">Vehicle Model</span>
                </div>
                <div className="inputBox1-navbar">
                  <input type="text" value={vnumber} onChange={e => {
                    setvnumber(e.target.value)
                    const vnumberRegex = /^[a-zA-Z0-9]+$/;
                    setIsValidVnumber(vnumberRegex.test(e.target.value));
                    setData({ location: location, vtype: vtype, vmodel: vmodel, vnumber: e.target.value, issue: issue, address: address })
                  }} required="required" />
                  <span className="user-navbar">Vehicle Number</span>
                </div>
                <div className="inputBox1-navbar">
                  <input type="text" value={issue} onChange={e => {
                    setissue(e.target.value)
                    const issueRegex = /^[a-zA-Z0-9]+$/;
                    setIsValidIssue(issueRegex.test(e.target.value));
                    setData({ location: location, vtype: vtype, vmodel: vmodel, vnumber: vnumber, issue: e.target.value, address: address })
                  }} required="required" />
                  <span className="user-navbar">Issue</span>
                </div>
                <div className="inputBox1-navbar">
                  <input type="text" value={address} onChange={e => {
                    setaddress(e.target.value)
                    const addressRegex = /^[a-zA-Z0-9]+$/;
                    setIsValidAddress(addressRegex.test(e.target.value));
                    setData({ location: location, vtype: vtype, vmodel: vmodel, vnumber: vnumber, issue: issue, address: e.target.value })
                  }} required="required" />
                  <span className="user-navbar">Address</span>
                </div>

                <Link to="/mechanic_list"><button className="enter" >Hire Now</button></Link>

              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="banner">
          <video
            autoPlay
            muted
            preload="auto"
            loop="true"

            className={`tagline-video ${showForm ? "hidden" : ""}`}
          >
            <source src={Videos} type="video/mp4" />
          </video>

          <div className="overlay" />
          <div className="mobile-image">
            <img src={MobileImage} alt="mobile-background"
              className={`images ${showForm ? "hidden" : ""}`} />
            <div className="maincontainerform123">
              <form className="container-navbar-form" action="#!" method="post">
                <div className="card-navbar">
                  <Link className="signgup-navbar" href="#!">Hire A Mechanic</Link>
                  <div className="inputBox1-navbar">
                    <input type="text" value={location} onChange={e => {
                      setlocation(e.target.value)
                      const locationRegex = /^[a-zA-Z0-9]+$/;
                      setIsValidLocation(locationRegex.test(e.target.value));
                      setData({ location: e.target.value, vtype: vtype, vmodel: vmodel, vnumber: vnumber, issue: issue, address: address })
                    }} required="required" />
                    <span className="user-navbar">Location</span>
                  </div>
                  <div className="inputBox1-navbar">
                    <input type="text" value={vtype} onChange={e => {
                      setvtype(e.target.value)
                      const vtypeRegex = /^[a-zA-Z0-9]+$/;
                      setIsValidVtype(vtypeRegex.test(e.target.value));
                      setData({ location: location, vtype: e.target.value, vmodel: vmodel, vnumber: vnumber, issue: issue, address: address })
                    }} required="required" />
                    <span className="user-navbar">Vehicle Type</span>
                  </div>
                  <div className="inputBox-navbar">
                    <input type="text" value={vmodel} onChange={e => {
                      setvmodel(e.target.value)
                      const vmodelRegex = /^[a-zA-Z0-9]+$/;
                      setIsValidVmodel(vmodelRegex.test(e.target.value));
                      setData({ location: location, vtype: vtype, vmodel: e.target.value, vnumber: vnumber, issue: issue, address: address })
                    }} required="required" />
                    <span>Vehicle Model</span>
                  </div>
                  <div className="inputBox1-navbar">
                    <input type="text" value={vnumber} onChange={e => {
                      setvnumber(e.target.value)
                      const vnumberRegex = /^[a-zA-Z0-9]+$/;
                      setIsValidVnumber(vnumberRegex.test(e.target.value));
                      setData({ location: location, vtype: vtype, vmodel: vmodel, vnumber: e.target.value, issue: issue, address: address })
                    }} required="required" />
                    <span className="user-navbar">Vehicle Number</span>
                  </div>
                  <div className="inputBox-navbar">
                    <input type="text" value={issue} onChange={e => {
                      setissue(e.target.value)
                      const issueRegex = /^[a-zA-Z0-9]+$/;
                      setIsValidIssue(issueRegex.test(e.target.value));
                      setData({ location: location, vtype: vtype, vmodel: vmodel, vnumber: vnumber, issue: e.target.value, address: address })
                    }} required="required" />
                    <span>Issue</span>
                  </div>
                  <div className="inputBox1-navbar">
                    <input type="text" value={address} onChange={e => {
                      setaddress(e.target.value)
                      const addressRegex = /^[a-zA-Z0-9]+$/;
                      setIsValidAddress(addressRegex.test(e.target.value));
                      setData({ location: location, vtype: vtype, vmodel: vmodel, vnumber: vnumber, issue: issue, address: e.target.value })
                    }} required="required" />
                    <span className="user-navbar">Address</span>
                  </div>

                  <Link to="/mechanic_list"><button className="enter" >Hire Now</button></Link>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
