import React from 'react'
import HeroSection from '../components/commen/HeroSection'
import Title from '../components/commen/Title'
import CategoryList from '../layout/CategoryList'

const Women = () => {
    return (
        <div>
            <HeroSection
                img1="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile_11_4kVAi9U.jpg?format=webp&w=768&dpr=2.0"
                img2="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-Banner_2_sAGMz6C.jpg?format=webp&w=768&dpr=2.0"
                img3="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-Banner_3_jx9rz19.jpg?format=webp&w=768&dpr=2.0"
            />
            <Title title="Categories" />
            <CategoryList />

        </div>
    )
}

export default Women
