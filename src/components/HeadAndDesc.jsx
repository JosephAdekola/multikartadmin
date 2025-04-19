import React from 'react'

export default function HeadAndDesc({head, desc}) {
  return (
    <div>
            <h3 className=' uppercase font-bold text-2xl '>{head}</h3>
            <p className=' capitalize text-sm text-gray-500 '>{desc}</p>
        </div>
  )
}
