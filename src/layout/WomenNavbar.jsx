import React, { useEffect, useState } from "react";
import styles from "../styles/women/women.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function WomenNavbar() {

  const [search, setSearch] = useState('')
  // console.log('search::: ', search);
  const navi = useNavigate()

  const wishlistItems = useSelector((store) => store.wishList.wishList);
  console.log('wishlistItems::: ', wishlistItems);
  const addToCartItem = useSelector((store) => store.cart.cart)
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (search) {
        navi(`/women/search?q=${search}`)
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
        {/* top wear */ }
        <div className={ styles.dropdownTopWear }>
          <button className={ styles.dropbtnTopWear }>
            TOP WEAR&nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={ styles.dropdownContentTopWear }>
            <Link to="oversizedTshirt">Oversized t-shirts</Link>

            <Link to="shirt">Shirts</Link>
            <Link to="sweetShirts">Sweet Shirts</Link>
            <Link to="tops">Tops</Link>
            <Link to="hoodies">Hoodies</Link>
            <Link to="jackets">Jackets</Link>
            <Link to="dresses">Dresses</Link>
          </div>
        </div>

        {/* bottom wear */ }
        <div className={ styles.dropdownBottomWear }>
          <button className={ styles.dropbtnBottomWear }>
            BOTTOM WEAR&nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={ styles.dropdownContentBottomWear }>
            {/* <Link to="allBottoms">All Bottoms</Link> */ }
            {/* <Link to="cargoAndJoggers">Cargo & Joggers</Link> */ }
            <Link to="jeans">Jeans</Link>
          </div>
        </div>

        {/*  full sets */ }
        <div className={ styles.dropdownBottomWear }>
          <button className={ styles.dropbtnBottomWear }>
            FULL SETS&nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={ styles.dropdownContentBottomWear }>
            <Link to="coOrdSets">Co Ord Sets</Link>
            {/* <Link to="cargoAndJoggers">Cargo & Joggers</Link> */ }
            <Link to="sneakers">Sneakers</Link>
          </div>
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

export default WomenNavbar;