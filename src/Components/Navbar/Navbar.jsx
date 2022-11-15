import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import $ from 'jquery'
import { useState } from 'react';


export default function Navbar() {
  const [hideCollpse,setHideCollpse]=useState(false);

  function AddCollapse(){
    $('#navbarSupportedContent').removeClass('d-none');
  }
  
  return (
  <>
  <nav className="navbar fixed-top navbar-expand-lg bg-sec navbar-dark fw-bolder p-lg-4 p-3" id="nav">
  <div className="container px-lg-5 mx-lg-5">
    <Link className="navbar-brand ms-xl-5" to="">START REACT</Link>
    <button className="navbar-toggler text-white fs-6 rounded"onClick={()=> AddCollapse()}type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      MENU<i class="ms-2 fa-solid fa-bars"></i>
    </button>
    <div className={`collapse navbar-collapse ${hideCollpse?'d-none':''}`} id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-xl-5">
        
        <li className="nav-item me-2">
          <Link className="nav-link py-3 px-0 px-lg-3" onClick={()=> setHideCollpse(true)} to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item me-2">
          <Link className="nav-link py-3 px-0 px-lg-3" onClick={()=> setHideCollpse(false)}  to="about">ABOUT</Link>
        </li>
        <li className="nav-item me-2">
          <Link className="nav-link py-3 px-0 px-lg-3" onClick={()=> setHideCollpse(true)}  to="contact">CONTACT</Link>
        </li>
       </ul>
    </div>
  </div>
</nav>
  </>
  )
}
