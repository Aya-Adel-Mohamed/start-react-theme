import React, { useState, useEffect } from "react";
import { HiChevronUp } from "react-icons/hi";
import styles from '../ScrollToTop/ScrollToTop.module.css'

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className={styles.topToBtm}>
            <div className={styles.iconPosition}>
            {" "}{showTopBtn && ( <HiChevronUp className= {styles.iconStyle} onClick={goToTop} /> )}{" "}
            </div>
        </div>
    );
};
export default ScrollToTop;