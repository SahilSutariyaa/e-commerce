/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import { removeWishList } from '../redux/slice/addWishList';
import style from '../styles/pages/wishList.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoWishList from '../components/commen/NoWishList';


const WishList = () => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((store) => store.wishList.wishList);
    // console.log('wishlistItems::: ', wishlistItems);


    const handleRemoveFromWishList = (id) => {
        dispatch(removeWishList(id));
        toast.warn('🦄 Item removed from Wishlist')

    };



    return (
        <>
            <h1 className={ style.list }>My Wishlist</h1>
            <div className={ style.app }>
                { wishlistItems.length > 0 ? (
                    wishlistItems.map((item) => (
                        <div key={ item.id } className={ style.container }>
                            <div className={ style.imgContainer }>
                                <img
                                    src={ item.imageURL1 }
                                    alt={ `Image of ${item.name} - 1` }
                                    className={ style.url1 }
                                />
                                <img
                                    src={ item.imageURL2 }
                                    alt={ `Image of ${item.name} - 2` }
                                    className={ style.url2 }
                                />
                            </div>
                            <div className={ style.descContainer }>
                                <h4>{ item.name }</h4>
                                <hr />
                                <p>{ item.desc }</p>
                                <p>₹{ item.price } MRP incl. all taxes</p>
                            </div>
                            <button
                                className={ style.btn }
                                onClick={ () => handleRemoveFromWishList(item.id) }
                            >
                                <FaHeart className={ style.icon } />
                            </button>
                        </div>
                    ))
                ) : (
                    <NoWishList />
                ) }
            </div>
        </>
    );
};

export default WishList;
