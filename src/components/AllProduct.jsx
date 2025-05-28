import React, { useEffect, useState } from 'react'
import HeadAndDesc from './HeadAndDesc'
import { allProductsData } from '../assets/mockData/products'
import ProductCard from './ProductCard'
import { getAllProducts } from '../utils/apiCalls/products'

export default function AllProduct() {

    const [allProducts, setAllProducts] = useState([])
    
    useEffect( () => {
        const fetchAllProducts = async () => {
            try {
                const res = await getAllProducts()
                console.log(res.data);
                
                setAllProducts(res.data)
                    
                } catch (error) {
                    if (error.response) {
                        console.log(error.response.data.message);
                        alert(error.response.data.message);
                        return;
                    }
                }
        };
        fetchAllProducts()
    }, [])    

    return (
        <div>
            <div className=' mb-5 '>
                <HeadAndDesc head={"product list"} desc={"multikart admin panel"} />
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                <ProductCard products={allProducts} />
            </div>
        </div>
    )
}
