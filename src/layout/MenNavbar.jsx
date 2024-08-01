import React, { useEffect, useState } from "react";
import styles from "../styles/men/men.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function MenNavbar() {
  const [search, setSearch] = useState('')

  const wishlistItems = useSelector((store) => store.wishList.wishList);
  // console.log('wishlistItems::: ', wishlistItems);
  const addToCartItem = useSelector((store) => store.cart.cart)
  const navi = useNavigate()

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (search) {
        navi(`/search?q=${search}`)
      }
      setSearch('')
    }, 1500)

    return () => {
      clearTimeout(timeOutId)
    }
  }, [search, navi])

  const addToWishList = () => {
    navi('/wishList')
  }
  const addToWishListCart = () => {
    navi('/addToCard')
  }
  return (
    <div className={ styles.navContainer }>


      <div className={ styles.navInnerFirstContainer }>

        <div className={ styles.dropdownTopWear }>
          <button className={ styles.dropbtnTopWear }>
            TOP WEAR&nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={ styles.dropdownContentTopWear }>
            <Link to="oversizedTshirt">Oversized t-shirts</Link>
            <Link to="tshirt">T-shirt</Link>
            <Link to="shirt">Shirts</Link>
            <Link to="jackets">Jakets</Link>
            <Link to="hoodies">Hoodies</Link>
            <Link to="sweatShrits">Sweat-Shirts</Link>
            <Link to="polos">Polos</Link>
            <Link to="supimaPolos">Supima Polo</Link>
            <Link to="fullSleeveTshirt">Full Sleece T-shirt</Link>
          </div>
        </div>


        <div className={ styles.dropdownBottomWear }>
          <button className={ styles.dropbtnBottomWear }>
            BOTTOM WEAR&nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={ styles.dropdownContentBottomWear }>
            {/* <Link to="cargoPants">Cargo pants</Link> */ }
            <Link to="jeans">Jeans</Link>
            <Link to="joggers">Joggers</Link>
            <Link to="shorts">Shorts</Link>
          </div>
        </div>


        <div className={ styles.sneakers }>
          <button>
            <Link to="sneakers">SNEAKERS</Link>
          </button>
        </div>

      </div>


      <ul className={ styles.navInnerSecondContainer }>
        <li className={ styles.inputCon }>
          <input type="text" placeholder="Search..." value={ search } onChange={ (e) => setSearch(e.target.value) } />
        </li>
        { wishlistItems.length > 0 && <b className={ styles.num }>{ wishlistItems.length }</b> }
        <li className={ styles.icon }>
          <i className="fa-regular fa-heart" onClick={ addToWishList }></i>
        </li>
        { addToCartItem.length > 0 && <b className={ styles.num }>{ addToCartItem.length }</b> }
        <li className={ styles.icon }>
          <i className="fa-solid fa-cart-shopping" onClick={ addToWishListCart }></i>
        </li>
      </ul>
    </div>
  );
}

export default MenNavbar;