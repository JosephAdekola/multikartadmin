import React from 'react'
import HeadAndDesc from './HeadAndDesc'
import placeHolderImage from "../../public/serverImages/beltedDresses/belted1.jpg"
import ButtonComp from './ButtonComp'

export default function AddProducts() {

    const plusIcon = [
        {id:1, icon: "pi pi-plus"},
        {id:1, icon: "pi pi-plus"},
        {id:1, icon: "pi pi-plus"},
        {id:1, icon: "pi pi-plus"},
        {id:1, icon: "pi pi-plus"}
    ]

    return (
        <div>
            <div className=' mb-5 ' >
                <HeadAndDesc head={"add products"} desc={"multikart admin panel"} />
            </div>
            <div className=' p-5 bg-white '>
                <div className=' grid grid-cols-2 gap-5 '>
                    <div className=' bg-amber-200 '>
                        <img src={placeHolderImage} className=' h-full w-full object-cover ' alt="" />
                    </div>
                    <div className=' flex flex-col gap-3 '>
                        {
                            plusIcon.map((icon, index)=>{
                                return(
                                    <i key={index} 
                                        className={`${icon.icon} p-5 bg-gray-200
                                            w-fit text-[#ec8951] `}></i>
                                )
                            })
                        }
                    </div>
                </div>
                <div className=' my-5 '>
                    <form action="" className=' flex flex-col gap-5 '>
                        <div className=' md:flex justify-between md:px-5 '>
                            <label htmlFor="" className=' capitalize font-bold block '>title:</label>
                            <input type="text" className=' border border-gray-300 w-full md:w-[70%] h-10 px-3 ' />
                        </div>

                        <div className=' md:flex justify-between md:px-5 '>
                            <label htmlFor="" className=' capitalize font-bold block '>price:</label>
                            <input type="text" className=' border border-gray-300 w-full md:w-[70%] h-10 px-3 ' />
                        </div>

                        <div className=' md:flex justify-between md:px-5 '>
                            <label htmlFor="" className=' capitalize font-bold block '>product code:</label>
                            <input type="text" className=' border border-gray-300 w-full md:w-[70%] h-10 px-3 ' />
                        </div>

                        <div className=' md:flex justify-between md:px-5 '>
                            <label htmlFor="" className=' capitalize font-bold block '>select a size:</label>
                            <select name="" id="" className=' border border-gray-300 w-full md:w-[70%] h-10 px-3 '>
                                <option value="">small</option>
                                <option value="">medium</option>
                                <option value="">large</option>
                                <option value="">extra large</option>
                            </select>
                        </div>

                        <div className=' md:flex justify-between md:px-5 '>
                            <label htmlFor="" className=' capitalize font-bold block '>total products:</label>
                            <input type="number" value={1} className=' border border-gray-300 w-full md:w-[70%] h-10 px-3 ' />
                        </div>
                        
                        <div className=' md:flex justify-between md:px-5 '>
                            <label htmlFor="" className=' capitalize font-bold block '>product description:</label>
                            <textarea  className=' border border-gray-300 w-full md:w-[70%]  h-[100px] px-3 ' />
                        </div>

                        <div className=' flex '>
                            <div className=' md:w-[30%] '></div>
                            <div className=' w-full md:w-[70%] px-2 flex gap-3 '>
                                <ButtonComp text={"add"} bground={"bg-[#ec8951]"} textFill={"text-white"} />
                                <ButtonComp text={"discard"} bground={"bg-gray-200"} textFill={"text-black"} />                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
