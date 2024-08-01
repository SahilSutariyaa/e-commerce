import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { kids } from '../data/kids'
import { menProductsData } from '../data/men'
import { womenProductsData } from '../data/women'

const Search = () => {

    const link = useLocation()
    const [searchProduct, setSearchProduct] = useState([])

    const quaryParams = new URLSearchParams(link.search)


    const query = quaryParams.get('q')

    useEffect(() => {
        const searchData = [...menProductsData, ...womenProductsData, ...kids]
        const filterData = searchData.filter((item) => {
            return item.category.toLowerCase().includes(query.toLowerCase())
        })
        setSearchProduct(filterData)
    }, [query]);


    return (
        <div>
            <h1>Search</h1>
            <ul>
                { searchProduct.map((item) => (
                    <>
                        <li key={ item.id }>{ item.category }</li>
                        <img src={ item.imageURL1 } alt="" />

                    </>
                )) }
            </ul>

        </div>
    )
}

export default Search
