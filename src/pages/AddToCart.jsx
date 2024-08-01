import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoCart from '../components/commen/NoCart';
import { addWishList, removeWishList } from '../redux/slice/addWishList';
import { clearCart, removeCart } from '../redux/slice/cart';
import style from '../styles/pages/addListCart.module.css';

const AddToCart = () => {
    const navi = useNavigate();
    const dispatch = useDispatch();
    const addToCartItem = useSelector((store) => store.cart.cart);
    const wishList = useSelector((store) => store.wishList.wishList);

    const addToWishList = (item) => {
        dispatch(addWishList(item));
        toast.success('Item added to wishlist!');
    };

    // eslint-disable-next-line no-unused-vars
    const removeFromWishList = (itemId) => {
        dispatch(removeWishList(itemId));
        toast.warn('🦄 Item removed from Wishlist');
    };

    const removeCartData = (itemId) => {
        dispatch(removeCart(itemId));
        toast.warn('🦄 Item removed from Cart');
    };

    const clearCartData = () => {
        dispatch(clearCart());
        toast.info('Cart has been cleared!');
    };

    let totalPrice = addToCartItem.map((value) => {
        return value.price * value.quantity;
    })

    // console.log("totalPrice", totalPrice)                                                              
    const total = totalPrice.reduce((acc, value) => {
        return acc + value
    }, 0)

    const paymentDetails = () => {
        navi('/paymentDetails');
    };

    return (
        <>
            <div className={ style.list }>
                <h1>Cart List</h1>
                {
                    addToCartItem.length > 0 ? (
                        addToCartItem.map((item) => {
                            const isInWishList = wishList.some(wishItem => wishItem.id === item.id);

                            return (
                                <div className={ style.mainContainer } key={ item.id }>
                                    <div className={ style.photoContainer }>
                                        <img src={ item.imageURL1 } alt="" />
                                    </div>
                                    <div className={ style.textContainer }>
                                        <div className={ style.innerContainer }>
                                            <div>
                                                <h3>{ item.name }</h3> <br />
                                                <h5>{ item.category }</h5>
                                            </div>
                                            <div>
                                                <h3>₹{ item.price * item.quantity }</h3>
                                                <br />
                                                <h5>MRP incl. of all taxes</h5>
                                            </div>
                                        </div> <br />
                                        <div className={ style.size }>
                                            <p>Size : { item.sizeSelect }</p> <br />
                                            <p>Qty : { item.quantity }</p>
                                        </div>

                                        <div className={ style.btn }>
                                            <button onClick={ () => removeCartData(item.id) }>Remove</button>


                                            { !isInWishList && <button onClick={ () => addToWishList(item) }>Add To WishList</button> }
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <NoCart />
                    )
                }
                {
                    addToCartItem.length > 0 &&
                    <div className={ style.payment }>
                        <div className={ style.clear } onClick={ clearCartData }>
                            <button>Clear Cart</button>
                        </div>
                        <div className={ style.clear } onClick={ paymentDetails }><button> Pay :-     { total }</button></div>
                    </div>
                }
            </div>
        </>
    );
}

export default AddToCart;
