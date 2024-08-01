import React from 'react'
import { useLocation } from "react-router-dom";
import { womenCategoryImg } from "../data/women";
import { menCategoryImg } from "../data/men";
import { kidsCategoryImg } from "../data/kids";
import styles from '../styles/layout/category.module.css'
import CategoryCard from '../components/commen/CategoryCard';

const CategoryList = () => {
    const navi = useLocation()

    let data = navi.pathname.includes("women")
        ? womenCategoryImg.map((v) => {
            return v;
        })
        : navi.pathname.includes("kids")
            ? kidsCategoryImg.map((v) => {
                return v;
            })
            : menCategoryImg.map((v) => {
                return v;
            });
    return (
        <>
            <div className={ styles.cardContainer }>

                {
                    data.map((value, index) => {
                        return <CategoryCard key={ index } value={ value } />
                    })
                }
            </div>
        </>
    )
}

export default CategoryList
