import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonComp from './ButtonComp'
import { productDeleter } from '../utils/apiCalls/products'

export default function ProductCard({ products = [] }) {

    const [modifyProd, setModifyProd] = useState(null)
    const [code, setCode] = useState(null)
    const [warning, setWarning] = useState(false)
    const navigate = useNavigate()  
    
    const notWarning = ()=>{
        setWarning(false)
        setCode(null)
    }

    const productDeleteHandler = async() =>{
        try {
            const res = await productDeleter({productCode: code})
            if (res) {
                alert("product successfully deleted")
                setWarning(false)
                window.location.reload()
                return
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                alert(error.response.data.message)
                return;                
            }

            if (error.message) {
                console.log("axios error" ,error.message);
                alert("their was an error deleting the product")
            }
        }
    }
    

    return (
        products.map((prod, index) => {

            const isHovered = modifyProd === prod.title



            return (
                <div key={index}
                    className=' p-7 bg-white w-fit '
                    onMouseEnter={() => setModifyProd(prod.title)}
                    onMouseLeave={() => setModifyProd(null)}>
                    
                    {/* warning section */}
                    <div className={`w-[50vw] h-[50vh] bg-gray-200 fixed top-1/2 left-1/2 ${!warning && ("hidden")}
                            transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 justify-center z-10 `}>
                        <p className=' text-center '>Are you want to deletethis product?</p>
                        <div className=' flex gap-3 justify-center '>
                            {<ButtonComp text={"yes"} bground={"bg-[#ec8951]"} textFill={"text-white"} performFunction={productDeleteHandler} />}
                            {<ButtonComp text={"no"} bground={"bg-gray-500"} textFill={"text-white"} performFunction={notWarning} />}
                        </div>
                    </div>

                    <div className=' mx-auto pb-3 relative '>
                        <img src={prod.images[0]} alt={prod.title}
                            className=' w-full h-full object-cover ' />
                        <div className={`absolute top-0 left-0 w-full h-full bg-[#ffffffa6]
                                flex justify-center gap-5 ${!isHovered && ('hidden')}`}>
                            <i className=' pi pi-pencil my-auto cursor-pointer '
                                onClick={() => navigate(`/editproduct/${prod.productCode}`)}></i>
                            <i className=' pi pi-trash my-auto cursor-pointer '
                                onClick={() => {setCode(prod.productCode);setWarning(true)}}></i>
                        </div>
                    </div>
                    <div className=' px-2 '>
                        <div>
                            <i className={`pi pi-star-fill ${prod.rating < 100 ? "text-gray-300" : "text-[#ec8951]"}`}></i>
                            <i className={`pi pi-star-fill ${prod.rating < 200 ? "text-gray-300" : "text-[#ec8951]"}`}></i>
                            <i className={`pi pi-star-fill ${prod.rating < 300 ? "text-gray-300" : "text-[#ec8951]"}`}></i>
                            <i className={`pi pi-star-fill ${prod.rating < 400 ? "text-gray-300" : "text-[#ec8951]"}`}></i>
                            <i className={`pi pi-star-fill ${prod.rating < 500 ? "text-gray-300" : "text-[#ec8951]"}`}></i>
                        </div>
                        <p>
                            {prod.title}
                        </p>
                        <div className=' flex gap-2 '>
                            <p className=' font-bold '>${prod.price}</p>
                            <p className=' line-through '>${prod.old_price}</p>
                        </div>
                        <div className=' flex gap-2 '>
                            {
                                prod.colour.map((button, index) => {
                                    return (
                                        <button className={`w-3 h-3 rounded-full ${button} border `}></button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )
        })
    )
}
