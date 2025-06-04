import React, { useEffect, useState } from 'react'
import headshot from '../assets/headshot.jpg'
import ButtonComp from './ButtonComp'
import { ordersNotification } from '../utils/apiCalls/metrics'
import { useNavigate } from 'react-router-dom'

export default function Header({ sideDisplay, status }) {

  const headerIcons = [
    { id: 1, name: "maximise", icon: "pi pi-arrow-up-right-and-arrow-down-left-from-center", unreads: false },
    { id: 2, name: "language", icon: "pi pi-language", unreads: false },
    { id: 3, name: "notifications", icon: "pi pi-bell", unreads: false },
    { id: 4, name: "inbox", icon: "pi pi-envelope", unreads: false }
  ]

  const [userOptions, setUserOptions] = useState(false)
  const [orderNotification, setOrderNotification] = useState(0)
  const [allNotification, setAllNotification] = useState(0)
  const [showNotifications, setShowNotifications] = useState(false)

  const navigate = useNavigate()

  const paidOrderNotification = async () => {
    try {
      const getPaidOrders = await ordersNotification()

      if (getPaidOrders) {
        setOrderNotification(getPaidOrders.data.data.length)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    paidOrderNotification()
    setAllNotification(orderNotification)
  }, [orderNotification])


  return (
    <div className=' w-full h-[15vh] bg-white flex justify-between px-5 '>
      <div className=' flex justify-between sm:w-[60%] '>
        <i className=' pi pi-align-left my-auto text-2xl text-[#ec8951] cursor-pointer '
          onClick={() => sideDisplay(!status)}></i>
        <div className="relative w-fit my-auto hidden sm:block z-20">
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
                  <i className={`${icon.icon}`}
                    onMouseEnter={() => icon.name === "notifications" && (setShowNotifications(true))}
                    onMouseLeave={() => setShowNotifications(false)}>
                    <ul className={`absolute -right-[120px] md:right-0 pt-[36px] w-[100vw] md:w-[30vw] overflow-hidden text-black
                          pb-5 bg-white transition-all duration-500 ease-in-out z-10 shadow
                          ${!showNotifications ? 'translate-y-5 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}
                          ${icon.name !== 'notifications' ? 'hidden' : ''}`}
                        onMouseEnter={() => setShowNotifications(true)}
                        onMouseLeave={() => setShowNotifications(false)}>
                      <div className={`flex justify-between py-2 border-b border-t border-gray-200 mb-2 px-5`}>
                        <p>Notifications</p>
                        <p>{allNotification}</p>
                      </div>
                      <li className=' px-5 cursor-pointer '
                          onClick={()=>navigate("/vieworders")}>
                        <h3 className=' flex gap-2 '>
                          <span className='pi pi-shopping-bag text-[#ec8951]'></span>
                          <p>
                            <span className='text-[#ec8951]'> {orderNotification} new orders </span><br />
                            you have got new orders, click here to view
                          </p>
                        </h3>
                      </li>
                    </ul>
                  </i>
                  <p className={`absolute top-[-50%] right-0 bg-[#ec8951] text-white px-2
                      ${icon.name != "notifications" && 'hidden'}`}
                    onMouseEnter={() => setShowNotifications(true)}
                    onMouseLeave={() => setShowNotifications(false)}>
                    {allNotification}
                  </p>
                </div>
              )
            })
          }
          <div className=' rounded-2xl overflow-hidden z-20 '>
            <img src={headshot} alt="profile picture"
              className=' h-[50px] w-[50px] object-cover cursor-pointer '
              onClick={() => setUserOptions(!userOptions)} />
            <div className={`absolute right-0 pt-[20px] w-[100px] overflow-hidden`}>
              <ul className={`${!userOptions && ("translate-x-full")} transition-all duration-200 ease-in-out`}>
                <ButtonComp text={"logout"} bground={"bg-[#ec8951]"} textFill={"text-white"} performFunction={e => { localStorage.clear("user", {}); window.location.reload() }} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
