import React from 'react'
import HeadAndDesc from './HeadAndDesc'

export default function Dashboard() {

    const dashMeta = [
        {id: 1, icon: "pi pi-send",bground: '#ffbc58', indicator: 'earnings', figure: 6659, duration:'this month'},
        {id: 2, icon: "pi pi-box",bground: '#13c9ca', indicator: 'products', figure: 9856, duration:'this month'},
        {id: 3, icon: "pi pi-envelope",bground: '#ec8951', indicator: 'messages', figure: 893, duration:'this month'},
        {id: 4, icon: "pi pi-users",bground: '#a5a5a5', indicator: 'new Vendors', figure: 5631, duration:'this month'},
    ]

  return (
    <div>
        {
            <HeadAndDesc head={"dashboard"} desc={"multikart admin panel"} />
        }
        <div className=' grid grid-cols-2 gap-5 my-5 '>
            {
                dashMeta.map((dash, index)=>{
                    return(
                        <div key={index} 
                            className=' p-5 bg-white '>
                            <div className=' flex gap-3 '>
                            <div className={`h-fit my-auto`}
                                style={{ backgroundColor: dash.bground}}>
                                <i className={`${dash.icon} text-3xl p-3 text-white`} ></i>
                            </div>
                            <div className=' capitalize '
                                style={{ color: dash.bground}}>
                                <h3>{dash.indicator}</h3>
                                <p>${dash.figure} this month</p>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
