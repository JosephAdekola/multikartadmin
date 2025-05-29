import React from 'react'

export default function HeadAndDesc({head, desc = "multikart admin panel", headFontSize = "text-2xl"}) {
  return (
    <div>
            <h3 className={`uppercase font-bold ${headFontSize}`}>{head}</h3>
            <p className=' capitalize text-sm text-gray-500 '>{desc}</p>
        </div>
  )
}
