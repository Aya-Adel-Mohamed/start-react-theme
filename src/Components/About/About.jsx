import React from 'react';
import styles from '../About/About.module.css';


export default function About() {
  return (
    <>
    <div className={`about ${styles.bgAbout} py-5 text-white`} id="about">
      <div className="container py-5 d-flex align-items-center flex-column">
      <h2 className={`text-center ${styles.AboutTitle} pt-5 pb-2 mt-5`}>ABOUT</h2>
    <div className="header-content py-2 d-flex align-items-center justify-content-center w-100">
      <div className={`${styles.line} me-3`}></div>
      <div className="star-icon"><i className="fas fa-star fa-2x"></i></div>
      <div className={`${styles.line} ms-3`}></div>
      </div>
      <div className="row justify-content-center mb-3">
      <div class="col-lg-4 ml-auto ps-lg-5 ps-2 py-lg-4 py-0 me-lg-3 me-0">
        <p class={`${styles.AboutParagh} ms-xl-5 ms-0`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div class="col-lg-4 mr-auto pe-lg-5 pe-0 py-lg-4 py-0">
        <p class={`${styles.AboutParagh} me-xl-5 me-0 ms-xl-2 ms-0`}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}
