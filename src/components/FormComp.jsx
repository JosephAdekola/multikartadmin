import React from 'react'

export default function FormComp({ textField1, display11 = "hidden", display12 = "hidden",
    textField2, display21 = "hidden", display22 = "hidden",
    textField3, display31 = "hidden", display32 = "hidden",
    textField4, display41 = "hidden", display42 = "hidden",
    textField5, display51 = "hidden", display52 = "hidden",
    selectField1, display61 = "hidden", display62 = "hidden",
    selectField1opt1, selectField1opt2, selectField1opt3, selectField1opt4,
    numberField1, display71 = "hidden", display72 = "hidden",
    textAreaField1, display81 = "hidden", display82 = "hidden",
    button1, button2 }) {
    return (
        <form action="" className=' flex flex-col gap-5 '>
            <div className={` ${display11} md:${display12} justify-between md:px-5 `}>
                <label htmlFor="" className=' capitalize font-bold block '>{textField1}</label>
                <input type="text" className={`border border-gray-300 w-full md:w-[70%] h-10 px-3 `} />
            </div>

            <div className={` ${display21} md:${display22} justify-between md:px-5 `}>
                <label htmlFor="" className=' capitalize font-bold block '>{textField2}</label>
                <input type="text" className={`border border-gray-300 w-full md:w-[70%] h-10 px-3 `} />
            </div>

            <div className={` ${display31} md:${display32} justify-between md:px-5 `}>
                <label htmlFor="" className=' capitalize font-bold block '>{textField3}</label>
                <input type="text" className={`border border-gray-300 w-full md:w-[70%] h-10 px-3 `} />
            </div>

            <div className={` ${display41} md:${display42} justify-between md:px-5 `}>
                <label htmlFor="" className=' capitalize font-bold block '>{textField4}</label>
                <input type="text" className={`border border-gray-300 w-full md:w-[70%] h-10 px-3 `} />
            </div>

            <div className={` ${display51} md:${display52} justify-between md:px-5 `}>
                <label htmlFor="" className=' capitalize font-bold block '>{textField5}</label>
                <input type="text" className={`border border-gray-300 w-full md:w-[70%] h-10 px-3 `} />
            </div>

            <div className={` ${display61} md:${display62} justify-between md:px-5 `}>
                <label htmlFor="" className=' capitalize font-bold block '>{selectField1}</label>
                <select name="" id="" className={`border border-gray-300 w-full md:w-[70%] h-10 px-3 `}>
                    <option value="">{selectField1opt1}</option>
                    <option value="">{selectField1opt2}</option>
                    <option value="">{selectField1opt3}</option>
                    <option value="">{selectField1opt4}</option>
                </select>
            </div>

            <div className={` ${display71} md:${display72} justify-between md:px-5 `}>
                <label htmlFor="" className=' capitalize font-bold block '>{numberField1}</label>
                <input type="number" value={1} className={`border border-gray-300 w-full md:w-[70%] h-10 px-3 `} />
            </div>

            <div className={` ${display81} md:${display82} justify-between md:px-5 `}>
                <label htmlFor="" className=' capitalize font-bold block '>{textAreaField1}</label>
                <textarea className={`border border-gray-300 w-full md:w-[70%]  h-[100px] px-3 `} />
            </div>

            <div className=' flex '>
                <div className=' md:w-[30%] '></div>
                <div className=' w-full md:w-[70%] px-2 flex gap-3 '>
                    {button1}
                    {button2}
                </div>
            </div>
        </form>
    )
}


                    {/* <form action="" className=' flex flex-col gap-5 '>
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
                    </form> */}
                
