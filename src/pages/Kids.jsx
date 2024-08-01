import React from 'react'
import HeroSection from '../components/commen/HeroSection'
import Title from '../components/commen/Title'
import CategoryList from '../layout/CategoryList'

const Kids = () => {
  return (
    <div>
      <HeroSection
        img1="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/3670820240705115821.jpg?format=webp&w=768&dpr=2.0"
        img2="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_5_HezFDr5.jpg?format=webp&w=768&dpr=2.0"
        img3="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_2_y7Ta4od.jpg?format=webp&w=768&dpr=2.0"
      />
      <Title title="Categories" />
      <CategoryList />

    </div>
  )
}

export default Kids
