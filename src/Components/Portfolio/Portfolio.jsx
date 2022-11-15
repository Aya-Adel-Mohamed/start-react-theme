import React from 'react';
import StarBorder from '../StarBorder/StarBorder.jsx';
import styles from '../Portfolio/Portfolio.module.css';
import cabinImg from '../../assets/cabin.png';
import cakeImg from '../../assets/cake.png';
import circusImg from '../../assets/circus.png';
import gameImg from '../../assets/game.png';
import safeImg from '../../assets/safe.png';
import submarineImg from '../../assets/submarine.png';
import $ from 'jquery';


export default function Portfolio() {
    const portfolios = [
        {title:'LOG CABIN', image: cabinImg, paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
        {title:'TASTY CAKE', image: cakeImg, paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
        {title:'CIRCUS TENT', image: circusImg, paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
        {title:'CONTROLLER', image: gameImg, paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
        {title:'LOCKED SAFE',image: safeImg,paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
        {title:'SUBMARINE', image: submarineImg, paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
    ];
    console.log(portfolios)

function display(index){
    let portfolioModel = portfolios[index];
    $('#title').html(portfolioModel.title)
    $('#img').attr('src',portfolioModel.image)
    $('#paragraph').html(portfolioModel.paragraph)
}

return (
<>
<section id="portfolio" className='px-xl-5 px-4 py-3'>
    <div className="container pt-5 px-xl-5 px-3 my-5">
    <h2 className={`text-center mb-0 ${styles.PortfolioTitle} pb-4 mt-5`}>PORTFOLIO</h2>
    <StarBorder/> 
    <div className="row justify-content-center align-items-center px-xl-5 px-0 pt-4 g-xl-5 g-4">
        {portfolios.map((portfolio,index)=>(
            <div key={index} className="col-md-6 col-lg-4">
                <div className="PortfolioImg mx-auto position-relative" onClick={()=>display(index)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <img src={portfolio.image} className="img-fluid rounded-3" alt=""/>
                    <div className={`${styles.layer} rounded-3 position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center h-100 w-100`}>
                        <div className="text-center text-white"><i className="fas fa-plus fa-5x"></i></div>
                    </div>
                </div>
            </div> 
            )
        )}   
    </div>
    <div className='modal fade' id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className=" modal-dialog modal-xl" role="document">
        <div className=" modal-content">
            <button className={`${styles.close} position-absolute`} type="button" data-bs-dismiss="modal" aria-label='Close'><span><i className={`fas fa-times ${styles.xIcon}`}></i></span></button>
            <div className="text-center">
            <div className="container p-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h2 className={`my-4 ${styles.PortfolioTitle}`} id="title"> </h2>
                    <StarBorder/> 
                <img id="img" className="img-fluid rounded-3 mb-5 mt-4" alt=""/>
                <p className="mb-5" id="paragraph"></p>
                <button className={`btn  ${styles.btnColor} text-white`} type="button"data-bs-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
            </div>
            </div>
        </div>
    </div>
    </div>
</div>
</div>
</div>
</section>

    </>
  )
}

