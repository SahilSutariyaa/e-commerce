import React from 'react'
import ProductList from '../components/ProductList'
import style from '../styles/pages/listPage.module.css'

function ListPage() {


  return (
    <div className={ style.list } >
      <ProductList />
    </div>
  )
}

export default ListPage
