import React, { useEffect, useState } from "react";
import styles from "../styles/kids/kids.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function KidsNavbar() {

  const [search, setSearch] = useState('')
  const wishlistItems = useSelector((store) => store.wishList.wishList);
  console.log('wishlistItems::: ', wishlistItems);
  const addToCartItem = useSelector((store) => store.cart.cart)
  const navi = useNavigate()

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (search) {
        navi(`/kids/search?q=${search}`)
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
        {/* boys */ }
        <div className={ styles.dropdownTopWear }>
          <button className={ styles.dropbtnTopWear }>
            BOY &nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={ styles.dropdownContentTopWear }>
            <Link to="boysTshirt">Boys t-shirts</Link>
            <Link to="boysPolo">Boys Polo</Link>
            <Link to="boysJoggers">Boys joggers</Link>
            <Link to="boysFullSleeveTshirt">Boys Full Sleeve T-shirt</Link>
            <Link to="boyshoodieAndSweetsShirt">
              Boys Hoodie & Sweets Shirt
            </Link>
            <Link to="boysJackets">Boys Jackets</Link>
          </div>
        </div>

        {/* girls */ }
        <div className={ styles.dropdownBottomWear }>
          <button className={ styles.dropbtnBottomWear }>
            GIRLS&nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={ styles.dropdownContentBottomWear }>
            <Link to="girlsTop">Girls Top</Link>
            <Link to="girlsDresses">Girls Dresses</Link>
            <Link to="girlsJoggers">Girls Joggers</Link>

            <Link to="girlsFullSleeveTshirt">Girls Full Sleeve T-shirt</Link>
            <Link to="girlshoodieAndSweetsShirt">
              Girls Hoodie & Sweets Shirt
            </Link>
            <Link to="girlsJackets">Girls Jackets</Link>
          </div>
        </div>

        {/* themes */ }
        <div className={ styles.dropdownBottomWear }>
          <button className={ styles.dropbtnBottomWear }>
            THEMES&nbsp;&nbsp;&nbsp;
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
          <div className={ styles.dropdownContentBottomWear }>
            <Link to="batman">Batman</Link>
            <Link to="blackPanther">Black Panther</Link>
            <Link to="naruto">Naruto</Link>
            <Link to="onePiece">One Piece</Link>

          </div>
        </div>
      </div>

      <ul className={ styles.navInnerSecondContainer }>
        <li className={ styles.inputCon }>
          <input type="text" placeholder="Search..." value={ search } onChange={ (e) => setSearch(e.target.value) } />
        </li>
        { wishlistItems.length > 0 && <b className={ styles.num }>{ wishlistItems.length }</b> }
        <li className={ styles.icon }>
          <i className="fa-regular fa-heart" onClick={ addToWishList }> </i>
        </li>
        { addToCartItem.length > 0 && <b className={ styles.num }>{ addToCartItem.length }</b> }
        <li className={ styles.icon }>
          <i className="fa-solid fa-cart-shopping" onClick={ addToWishListCart }></i>
        </li>
      </ul>
    </div>
  );
}

export default KidsNavbar;