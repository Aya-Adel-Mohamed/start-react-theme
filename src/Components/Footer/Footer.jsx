import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Footer/Footer.module.css';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function Footer() {
  return (
    <>
    <div className='text-light text-center'>
    <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                  <div className="col-lg-4 mb-5 mb-lg-0 my-3">
                  <h4 class={`${styles.footerHeader} mb-4 fw-bold`}>LOCATION</h4>
                  <p className='content mb-0'>2215 John Daniel Drive</p>
                  <p className={styles.contant}>Clark, MO 65243</p>
                  </div>
                  <div className="col-lg-4 mb-5 mb-lg-0 my-3">
                    <h4 class={`${styles.footerHeader} mb-4 fw-bold`}>AROUND THE WEB</h4>
                    <div className="social-icons">
                      <Link to="" className="text-decoration-none mx-1"><i className={`fa-brands fa-facebook-f rounded-circle ${styles.icon} d-inline-flex justify-content-center align-items-center`}></i></Link>
                      <Link to="" className=" text-decoration-none mx-1"><i className={`fa-brands fa-twitter rounded-circle ${styles.icon} d-inline-flex justify-content-center align-items-center`}></i></Link>
                      <Link to="" className="text-decoration-none mx-1"><i className={`fa-brands fa-linkedin-in rounded-circle ${styles.icon} d-inline-flex justify-content-center align-items-center`}></i></Link>
                      <Link to="" className=" text-decoration-none mx-1"><i className={`fa-brands fa-dribbble rounded-circle ${styles.icon} d-inline-flex justify-content-center align-items-center`}></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-5 mb-lg-0 my-3 px-lg-4 px-md-0">
                  <h4 class={`${styles.footerHeader} mb-4 fw-bold`}>ABOUT FREELANCER</h4>
                  <p className={`${styles.content} mb-0 px-xxl-5 px-md-0`}>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                  </div>
                </div>
                <ScrollToTop />
            </div>
        </footer>
        <div className={styles.copyRight}>
          <div className="container">
            <p className='p-4 mb-0'>Copyright © Your Website 2021</p>
          </div>
        </div>
      </div>
    </>
  )
}
