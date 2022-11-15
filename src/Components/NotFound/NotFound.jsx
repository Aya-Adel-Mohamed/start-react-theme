import React from 'react';
import styles from '../NotFound/NotFound.module.css';
import notFoundImg from '../../assets/NotFound.jpg';

export default function NotFound() {
  return (
    <div className="not-found pt-3">
      <div className='container p-5 text-center'>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 pt-5 pb-2">
            <h2 className='text-dark fw-bold mb-4'>Oops....</h2>
            <h2 className={`${styles.notFoundTitle} fw-bolder`}>Page Not Found</h2>
          </div>
          <div className="col-md-6 pt-5 pb-2"><img src={notFoundImg} className="w-100" alt="" /></div>
        </div>
    </div>
    </div>
  )
}
