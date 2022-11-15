import React from 'react';
import styles from '../Home/Home.module.css'
import homeImg from '../../assets/avataaars.svg';

export default function Home() {
  return (
    <>
    <header className={`text-center text-white ${styles.bgHome} py-5`}>
            <div className="container d-flex align-items-center flex-column py-5">
                <img className={`mb-5 ${styles.homeImg} mt-5 pt-5 pb-1`} src={homeImg} alt="" />
                <h1 className={`mb-4 ${styles.title}`}>START REACT</h1>
                <div className="header-content py-2 d-flex align-items-center justify-content-center w-100">
                    <div className={`${styles.line} me-3`}></div>
                    <div className="star-icon"><i className="fas fa-star fa-2x"></i></div>
                    <div className={`${styles.line} ms-3`}></div>
                </div>
                <p className={`${styles.paraghHome} mb-0 mt-3 pb-2`}>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>
    </>
  )
}
