import React, { useEffect, useState } from 'react';
import styles from '../styles/components/productList.module.css';
import Card from './card/Card';
import { useLocation, useParams } from 'react-router-dom';
import { womenProductsData } from '../data/women';
import { menProductsData } from '../data/men';
import { kids } from '../data/kids';
import SideBar from './SideBar';

const ProductList = () => {
    const { id } = useParams();
    const location = useLocation();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    // const [activeSize, setActiveSize] = useState(false)

    useEffect(() => {
        let productsData = [];
        if (location.pathname.includes('women')) {
            productsData = womenProductsData.filter(product => product.categories === id);
        } else if (location.pathname.includes('kids')) {
            productsData = kids.filter(product => product.categories === id);
        } else {
            productsData = menProductsData.filter(product => product.categories === id);
        }
        setData(productsData);
        setFilteredData(productsData);
    }, [id, location.pathname]);

    const applyFilters = (priceRange, sizes) => {
        let filteredProducts = data;


        if (priceRange) {
            const [itemMin, itemMax] = priceRange.split('-').map(Number);
            filteredProducts = filteredProducts.filter(product => product.price >= itemMin && product.price <= itemMax);
        }


        if (sizes.length > 0) {
            filteredProducts = filteredProducts.filter(product => {
                return sizes.every(size => product.checkedCheckBox && product.checkedCheckBox.includes(size));
            });
        }

        setFilteredData(filteredProducts);
    };

    const resetFilters = () => {
        setFilteredData(data);
    };

    return (
        <>
            <SideBar
                applyFilters={ applyFilters }
                resetFilters={ resetFilters }
                data={ data }
            />

            <div className={ styles.cardContainer }>
                { filteredData.length > 0 ? (
                    filteredData.map((product, index) => <Card key={ index } value={ product } />)
                ) : (
                    <center>
                        <h1>No products found.</h1>
                    </center>
                ) }
            </div>
        </>
    );
};

export default ProductList;
