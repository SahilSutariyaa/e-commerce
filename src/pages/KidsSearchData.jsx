import React, { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import { useLocation } from 'react-router-dom'
import styles from '../styles/pages/mensearchdata.module.css'
import { kidsId } from '../data/kids'

const KidsSearchData = ({ data }) => {
  const link = useLocation()
  const [searchProduct, setSearchProduct] = useState([])

  const quaryParams = new URLSearchParams(link.search)


  const query = quaryParams.get('q')


  useEffect(() => {
    const searchData = kidsId
    const filterData = searchData.filter((item) => {
      return item.categories.toLowerCase().includes(query.toLowerCase())
    })
    setSearchProduct(filterData)
  }, [query]);

  if (!KidsSearchData) return null;
  return (
    <div className={ styles.container }>
      {
        searchProduct.length > 0 ? (
          searchProduct.map((data) => {
            return <Card value={ data } />

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

export default KidsSearchData
