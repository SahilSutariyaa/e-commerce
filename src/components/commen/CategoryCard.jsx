import React from "react";
import styles from "../../styles/components/commen/category.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ value }) {

  return (
    <Link to={ value.path } className={ styles.container } >
      <img src={ value.img } alt="img" className={ styles.imgContainer } />
    </Link>
  );
}

export default CategoryCard;