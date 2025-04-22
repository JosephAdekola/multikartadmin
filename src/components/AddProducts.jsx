import React from 'react'
import HeadAndDesc from './HeadAndDesc'
import placeHolderImage from "../../public/serverImages/beltedDresses/belted1.jpg"
import ButtonComp from './ButtonComp'
import FormComp from './FormComp'

export default function AddProducts() {

    const plusIcon = [
        { id: 1, icon: "pi pi-plus" },
        { id: 1, icon: "pi pi-plus" },
        { id: 1, icon: "pi pi-plus" },
        { id: 1, icon: "pi pi-plus" },
        { id: 1, icon: "pi pi-plus" }
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
                            plusIcon.map((icon, index) => {
                                return (
                                    <i key={index}
                                        className={`${icon.icon} p-5 bg-gray-200
                                            w-fit text-[#ec8951] `}></i>
                                )
                            })
                        }
                    </div>
                </div>
                <div className=' my-5 '>
                    {
                        <FormComp textField1={"title:"} display11='block' display12='flex'
                            textField2={"price:"} display21='block' display22='flex'
                            textField3={"product code:"} display31='block' display32='flex'
                            selectField1={"select size:"} display61='block' display62='flex'
                            selectField1opt1={"small"} selectField1opt2={"medium"} selectField1opt3={"large"} selectField1opt4={"extra large"}
                            numberField1={"total product:"} display71={"block"} display72={"flex"}
                            textAreaField1={"add description:"} display81={"block"} display82='flex'
                            button1={<ButtonComp text={"add"} bground={"bg-[#ec8951]"} textFill={"text-white"} />}
                            button2={<ButtonComp text={"discard"} bground={"bg-gray-200"} textFill={"text-black"} />} />
                    }
                </div>
            </div>
        </div>
    )
}
