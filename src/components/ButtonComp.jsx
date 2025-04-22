import React from 'react'

export default function ButtonComp({text, bground, textFill, performFunction}) {
    return (
        <button className={`${bground} ${textFill} font-bold px-7 py-3 uppercase cursor-pointer `}
                onClick={performFunction}>
            {text}
        </button>
    )
}