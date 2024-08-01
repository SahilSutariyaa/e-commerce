import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/components/card/card.module.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addWishList, removeWishList } from "../../redux/slice/addWishList";
import { toast } from "react-toastify";


function Card({ value }) {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
   
    const [isWishlisted, setIsWishlisted] = useState(false);

   
    function handleDetails() {
        navigate(`detailsPage/${value.id}`);
    }

  
    function handleWishlist() {
        if (isWishlisted) {
            dispatch(removeWishList(value.id));
            toast.warn('🦄 Item removed from Wishlist')
        } else {
            dispatch(addWishList({ ...value, qty: 1 })); 
            toast.success('🦄 Item added to Wishlist');
        }
        setIsWishlisted(!isWishlisted); 
    }

   
    const wishList = useSelector((state) => state.wishList.wishList);

   
    useEffect(() => {
        setIsWishlisted(wishList.some(item => item.id === value.id));
    }, [wishList, value.id]);

    if (!value) return null;

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img 
                    src={value.imageURL1} 
                    alt={value.name} 
                    className={styles.url1} 
                    onError={(e) => e.target.src = 'path/to/default-image.jpg'} 
                />
                <img 
                    src={value.imageURL2} 
                    alt={value.name} 
                    className={styles.url2} 
                    onError={(e) => e.target.src = 'path/to/default-image.jpg'} 
                />
            </div>
            <div className={styles.descContainer}>
                <h4>{value.name}</h4>
                <div>
                    <hr />
                    <br />
                    <p>{value.desc}</p>
                    <p>₹{value.price} MRP incl. all taxes</p>
                </div>
            </div>
            <button className={styles.btn} onClick={handleWishlist}>
                {isWishlisted ? (
                    <FaHeart className={`${styles.icon} ${styles.filledHeart}`} />
                ) : (
                    <CiHeart className={styles.icon} />
                )}
            </button>
            <button className={styles.details} onClick={handleDetails}>
                Details page
            </button>
        </div>
    );
}




export default Card;
