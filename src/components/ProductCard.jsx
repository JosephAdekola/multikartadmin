import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({products = [] }) {

    const [modifyProd, setModifyProd] = useState(null)
    const navigate = useNavigate()

  return (
    products.map((prod, index) => {
    
        const isHovered = modifyProd === prod.title

        return (
            <div key={index}
                className=' p-7 bg-white w-fit '
                onMouseEnter={()=>setModifyProd(prod.title)}
                onMouseLeave={()=>setModifyProd(null)}>
                <div className=' mx-auto pb-3 relative '>
                    <img src={prod.images[1]} alt={prod.title}
                        className=' w-full h-full object-cover ' />
                    <div className= {`absolute top-0 left-0 w-full h-full bg-[#ffffffa6]
                                flex justify-center gap-5 ${!isHovered && ('hidden')}`}>
                        <i className=' pi pi-pencil my-auto cursor-pointer '
                            onClick={()=>navigate('/editproduct')}></i>
                        <i className=' pi pi-trash my-auto cursor-pointer '></i>
                    </div>
                </div>
                <div className=' px-2 '>
                    <div>
                        <i className=' pi pi-star-fill text-[#ec8951] '></i>
                        <i className=' pi pi-star-fill text-[#ec8951] '></i>
                        <i className=' pi pi-star-fill text-[#ec8951] '></i>
                        <i className=' pi pi-star-fill text-[#ec8951] '></i>
                        <i className=' pi pi-star-fill text-gray-300 '></i>
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
                            prod.colour.map((button, index)=>{
                                return(
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
