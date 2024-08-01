import React, { useState } from 'react'
import styles from '../styles/layout/navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);


    function handleClose() {
        setIsVisible(!isVisible);
    }


    return (
        <>
            <div className={ styles.container }>
                <h3 className={ styles.logoContainer }>The Souled Store</h3>

                <ul
                    className={ `${styles.categoryContainer} ${isVisible ? styles.visible : ""
                        }` }
                >
                    <li className={ styles.liList } onClick={ handleClose }>
                        <Link to="/">MEN</Link>
                    </li>
                    <li onClick={ handleClose }>
                        <Link to="women">WOMEN</Link>
                    </li>
                    <li onClick={ handleClose }>
                        <Link to="kids">KIDS</Link>
                    </li>

                </ul>
                <div className={ styles.bars } onClick={ handleClose }>
                    { isVisible ? (
                        <i className="fa-solid fa-xmark"></i>
                    ) : (
                        <i className="fa-solid fa-bars"></i>
                    ) }
                </div>
            </div>
        </>
    )
}

export default Navbar
