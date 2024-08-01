/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import style from '../styles/pages/details.module.css'
import { useParams } from 'react-router-dom';
import { menProductsData } from '../data/men';
import { womenProductsData } from '../data/women';
import { kids } from '../data/kids';
import { useDispatch, useSelector } from 'react-redux';
import { addWishList, removeWishList } from '../redux/slice/addWishList';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCart } from '../redux/slice/cart';


const DetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [sizeSelect, setSizeSelect] = useState('')


  const params = useParams()
  const dispatch = useDispatch()

  const wishList = useSelector((state) => state.wishList.wishList);

  let data = [...menProductsData, ...womenProductsData, ...kids].find((item) =>
    item.id == params.productId
  )

  const isInWishList = wishList.find(item => item.id === data.id);

  const addToWishList = () => {
    dispatch(addWishList({ ...data, qty: 1 }));
    toast.success('🦄 Item added to Wishlist');

  };

  const removeWishList1 = () => {
    dispatch(removeWishList({ id: data.id }));
  };

  const addToCartData = () => {
    const qty = parseInt(quantity);
    if (sizeSelect) {
      dispatch(addCart({ ...data, quantity: qty, sizeSelect }));
      toast.success('🛒 Item added to Cart!');
    } else {
      toast.error("Please Select a Size");
    }
  };

  const handleSelected = (id) => {
    setSizeSelect(id)
  }

  if (!data) return null;
  return (
    <>
      <div className={ style.detailContainer }>
        <div className={ style.photo }>

          <div className={ style.detailPhotoFirst }>
            <img src={ data.imageURL1 } alt="" />
          </div>
          <div className={ style.detailPhotoSecond }>
            <img src={ data.imageURL2 } alt="" />
          </div>
        </div>
        <div className={ style.detailItem }>

          <h2>{ data.name }</h2>
          <p>{ data.category }</p>
          <hr />
          <br />
          <p>₹{ data.price }</p>
          <h6>MRP incl. if all taxes</h6>

          <br />
          <div className={ style.size }>
            <p

            >
              Size</p>
            <div className={ style.sizeBtn }>

              { data.checkedCheckBox.map((item) => (

                <button
                  key={ item }
                  onClick={ () => {
                    handleSelected(item);
                  } }
                  className={ sizeSelect === item ? `${style.sizeButton} ${style.active}` : style.sizeButton }
                  value={ sizeSelect }
                >
                  { item }
                </button>

              )) }
            </div>
          </div>
          <br />


          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            max={ 10 }
            placeholder='Please Select Quantity'
            value={ quantity }
            onChange={ (e) => setQuantity(e.target.value) }
            required
          />

          <div className={ style.listBtn }>
            <button className={ style.btn1 } onClick={ addToCartData }>🛒 Add to Cart</button>

            { isInWishList ? (
              <button className={ style.btn2 } onClick={ removeWishList1 } >
                <FaHeart />Already Wishlist
              </button>
            ) : (
              <button className={ style.btn2 } onClick={ addToWishList } >
                <CiHeart />Add to Wishlist
              </button>
            ) }
            {/* <button> 
           { wishList.find((item) => item.id === data.id) ? (
                <div
                  style={ { display: "flex", gap: "4px" } }
                  onClick={ removeWishList }
                >
                  <i className="fa-solid fa-heart"></i>
                  <p>Already Added</p>
                </div>
              ) : (
                <div
                  onClick={ addToWishList }
                  style={ { display: "flex", gap: "4px" } }
                >
                  <i className="fa-regular fa-heart"></i>
                  <p>Add to Wishlist</p>
                </div>
              ) }
            </button> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default DetailPage
