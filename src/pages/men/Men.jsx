import React from 'react'
import HeroSection from '../../components/commen/HeroSection'
import Title from '../../components/commen/Title'
import CategoryList from '../../layout/CategoryList'

const Men = () => {
    return (
        <div>
            <HeroSection
                img1="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_5vinMIZ.jpg?format=webp&w=768&dpr=2.0"
                img2="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mob_banner_copy_5.jpg?format=webp&w=768&dpr=2.0"
                img3="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile_12_z850IID.jpg?format=webp&w=768&dpr=2.0"
            />
            <Title title="Categories" />
            <CategoryList />
            
        </div>
    )
}

export default Men
