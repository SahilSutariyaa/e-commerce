import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import { useLocation } from 'react-router-dom'

import styles from '../styles/pages/mensearchdata.module.css'
import { womenProductsData } from '../data/women'

const WomenSearchData = () => {

    const link = useLocation()
    const [searchProduct, setSearchProduct] = useState([])

    const quaryParams = new URLSearchParams(link.search)


    const query = quaryParams.get('q')


    useEffect(() => {
        const searchData = womenProductsData
        const filterData = searchData.filter((item) => {
            return item.category.toLowerCase().includes(query.toLowerCase())
        })
        setSearchProduct(filterData)
    }, [query]);

    if (!WomenSearchData) return null;

    return (
        <div className={ styles.container }>
            {
                searchProduct.length > 0 ? (
                    searchProduct.map((value) => {
                        return <Card key={ value } value={ value } />

                    }))

                    : (
                        <center className={ styles.data }>
                            <h1>No Data Found</h1>
                        </center>
                    )
            }
        </div>
    )
}

export default WomenSearchData

