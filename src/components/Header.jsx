import React, { useState } from 'react'
import headshot from '../assets/headshot.jpg'
import ButtonComp from './ButtonComp'

export default function Header({ sideDisplay, status }) {

  const headerIcons = [
    { id: 1, name: "maximise", icon: "pi pi-arrow-up-right-and-arrow-down-left-from-center", unreads: false },
    { id: 2, name: "language", icon: "pi pi-language", unreads: false },
    { id: 3, name: "notifications", icon: "pi pi-bell", unreads: false },
    { id: 4, name: "inbox", icon: "pi pi-envelope", unreads: false }
  ]

  const [userOptions, setUserOptions] = useState(false)

  return (
    <div className=' w-full h-[15vh] bg-white flex justify-between px-5 '>
      <div className=' flex justify-between sm:w-[60%] '>
        <i className=' pi pi-align-left my-auto text-2xl text-[#ec8951] cursor-pointer '
          onClick={() => sideDisplay(!status)}></i>
        <div className="relative w-fit my-auto hidden sm:block">
          <input
            type="text"
            placeholder="search"
            className="bg-gray-100 pl-10 pr-10 py-2  max-w-[400px]"
          />
          <i className="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
        </div>
      </div>
      <div className=' sm:w-[40%] my-auto '>
        <div className=' flex justify-end '>
          {
            headerIcons.map((icon, index) => {
              return (
                <div className=' border-l border-gray-200 px-5 h-fit my-auto text-[#ec8951] relative '
                  key={index}>
                  <i className={`${icon.icon}`}></i>
                  <p className={`absolute top-[-50%] right-0 bg-[#ec8951] text-white px-2
                      ${icon.name != "notifications" && 'hidden'}`}>3</p>
                </div>
              )
            })
          }
          <div className=' rounded-2xl overflow-hidden '>
            <img src={headshot} alt="profile picture"
              className=' h-[50px] w-[50px] object-cover cursor-pointer '
              onClick={()=>setUserOptions(!userOptions)} />
              <div className={`absolute right-0 pt-[20px] w-[100px] overflow-hidden`}>
                <ul className={`${!userOptions && ("translate-x-full")} transition-all duration-200 ease-in-out`}>
                  <ButtonComp text={"logout"} bground={"bg-[#ec8951]"} textFill={"text-white"} performFunction={e=>{localStorage.clear("user", {}); window.location.reload()}} />
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
