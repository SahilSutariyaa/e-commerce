import React from 'react'
import styles from '../../styles/components/commen/nocart.module.css'
const NoCart = () => {

    const handleShopping = () => {
        window.location.href = "/";
    }
    const handleMen = () => {
        window.location.href = "/";
    }
    const handleWomen = () => {
        window.location.href = "/women";
    }
    const handleKids = () => {
        window.location.href = "/kids";
    }
    return (

        <>
            <div className={ styles.container }>
                <div className={ styles.imgCon }>
                    <img src="https://tss-static-images.gumlet.io/emptyCart.png" alt="" />
                </div>
                <div className={ styles.desc }>
                    <p>Your shopping cart is empty.</p>
                    <p>Please add something soon, carts have feelings too.</p>
                </div>
                <div className={ styles.categoriesCon }>
                    <p className={ styles.para }>Popular Categories</p>
                    <div className={ styles.categoriesBtn }>
                        <button onClick={ handleMen }>Men</button>
                        <button onClick={ handleWomen }>Women</button>
                        <button onClick={ handleKids }>Kids</button>
                    </div>
                </div>
                <div className={ styles.btnCon }>
                    <button onClick={ handleShopping }>Continue Shopping</button>

                </div>
            </div>
        </>
    )
}

export default NoCart
