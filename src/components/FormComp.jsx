import React from 'react'

export default function FormComp({
    textField, textDisplay = "hidden", textDisplaymd = "hidden", textInputType,
    selectField, selectDisplay = "hidden", selectDisplaymd = "hidden", selectInputValue,
    selectField1opt1, selectField1opt2, selectField1opt3, selectField1opt4,
    numberField, numberDisplay = "hidden", numberDisplaymd = "hidden",
    textAreaField, textAreaDisplay = "hidden", textAreaDisplaymd = "hidden",
    checkboxLabel, checkboxOption1, checkboxOption2, checkboxOption3, checkboxOption4,
    checkBoxDisplay = "hidden", checkBoxDisplaymd = "hidden", 
    checkBoxesOption1Value, checkBoxesOption2Value, checkBoxesOption3Value, checkBoxesOption4Value, 
     selectedOption = [], setSelectedOptions,
     textInputValue, numberInputValue, textAreaInputValue,
    button1, button2, stringSetter, integerSetter
}) {

    const stringGrabber = (e) => {
        e.preventDefault()

        const data = e.target.value
        console.log(data);
        

        stringSetter(data)

    }

    const integerGrabber = (e) => {
        e.preventDefault()

        const data = parseInt(e.target.value)
        // console.log(data);

        integerSetter(data)

    }

    const checkboxHandler = (e)=>{

        const {checked, value} = e.target

        setSelectedOptions(prev=> checked ? [...prev, value] : prev.filter(v=>v!==value))

    }

    return (
        <form action="" className=' flex flex-col gap-5 '>

            <div className={` ${textDisplay} md:${textDisplaymd} justify-between md:px-5 `}>
                <label htmlFor="" className=' capitalize font-bold block w-[30%] text-right pr-3 '>{textField}</label>
                <input type={textInputType} className={`border border-gray-300 w-full md:w-[70%] h-10 px-3 `}
                    onChange={e => stringGrabber(e)} value={textInputValue} />
            </div>

            <div className={` ${numberDisplay} md:${numberDisplaymd} justify-between md:px-5 `}>
                <label htmlFor="" className=' capitalize font-bold block w-[30%] text-right pr-3 '>{numberField}</label>
                <input type="number" className={`border border-gray-300 w-full md:w-[70%] h-10 px-3 `}
                    onChange={e => integerGrabber(e)} value={numberInputValue} />
            </div>

            <div className={` ${selectDisplay} md:${selectDisplaymd} justify-between md:px-5 `}>
                <label htmlFor="" className=' capitalize font-bold block w-[30%] text-right pr-3 '>{selectField}</label>
                <select name="" className={`border border-gray-300 w-full md:w-[70%] h-10 px-3 `}
                    onChange={e => stringGrabber(e)} value={selectInputValue} >
                    <option value="Choose"></option>
                    <option value={selectField1opt1}>{selectField1opt1}</option>
                    <option value={selectField1opt2}>{selectField1opt2}</option>
                    <option value={selectField1opt3}>{selectField1opt3}</option>
                    <option value={selectField1opt4}>{selectField1opt4}</option>
                </select>
            </div>

            <div className={` ${textAreaDisplay} md:${textAreaDisplaymd} justify-between md:px-5 `}>
                <label htmlFor="" className=' capitalize font-bold block w-[30%] text-right pr-3 '>{textAreaField}</label>
                <textarea className={`border border-gray-300 w-full md:w-[70%]  h-[100px] px-3 `}
                    onChange={e => stringGrabber(e)} value={textAreaInputValue} />
            </div>

            <div className={`flex justify-between gap-2 ${checkBoxDisplay} md:${checkBoxDisplaymd} mb-5 py-5 `}>
                <label className="capitalize font-bold block w-[30%] text-right pr-3">{checkboxLabel}</label>

                <div className={` w-full md:w-[70%] h-10 px-3 `}>
                    <div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                value={checkBoxesOption1Value}
                            onChange={e => checkboxHandler(e)}
                            checked = {selectedOption.includes(checkBoxesOption1Value)}
                            />
                            <label htmlFor="">{checkboxOption1}</label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                value={checkBoxesOption2Value}
                            onChange={e => checkboxHandler(e)}
                            checked = {selectedOption.includes(checkBoxesOption2Value)}
                            />
                            <label htmlFor="">{checkboxOption2}</label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                value={checkBoxesOption3Value}
                            onChange={e => checkboxHandler(e)}
                            checked = {selectedOption.includes(checkBoxesOption3Value)}
                            />
                            <label htmlFor="">{checkboxOption3}</label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                value={checkBoxesOption4Value}
                            onChange={e => checkboxHandler(e)}
                            checked = {selectedOption.includes(checkBoxesOption4Value)}
                            />
                            <label htmlFor="">{checkboxOption4}</label>
                        </div>
                    </div>
                </div>
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