import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import { useLocation } from 'react-router-dom'
import { menProductsData } from '../data/men'
import styles from '../styles/pages/mensearchdata.module.css'

const MenSerchData = () => {
    const link = useLocation()
    const [searchProduct, setSearchProduct] = useState([])

    const quaryParams = new URLSearchParams(link.search)


    const query = quaryParams.get('q')


    useEffect(() => {
        const searchData = menProductsData
        const filterData = searchData.filter((item) => {
            return item.category.toLowerCase().includes(query.toLowerCase())
        })
        setSearchProduct(filterData)
    }, [query]);

    if (!MenSerchData) return null;



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

export default MenSerchData;

