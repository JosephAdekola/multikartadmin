import React from 'react'
import HeadAndDesc from './HeadAndDesc'
import { allProductsData } from '../assets/mockData/products'
import ProductCard from './ProductCard'

export default function AllProduct() {

    return (
        <div>
            <div className=' mb-5 '>
                <HeadAndDesc head={"product list"} desc={"multikart admin panel"} />
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                <ProductCard products = {allProductsData}  />
            </div>
        </div>
    )
}
