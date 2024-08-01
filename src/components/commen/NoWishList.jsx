import React from 'react'
import styles from '../../styles/components/commen/nowishList.module.css'

const NoWishList = () => {
    const handleShopping = () => {
        window.location.href = "/";
    }
    return (
        <>
            <div className={ styles.container }>
                <div className={ styles.imgCon }>
                    <img
                        src="https://www.thesouledstore.com/static/img/wishList-empty-icon.fd2a993.png"
                        alt=""
                    />
                </div>
                <div className={ styles.desc }>
                    <p>Your wishlist is lonely and looking for love.</p>
                    <p>
                        Add products to your wishlist, review them anytime and easily move to
                        cart.
                    </p>
                    <div className={ styles.btnCon }>
                        <button onClick={ handleShopping }>Continue Shopping</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NoWishList
