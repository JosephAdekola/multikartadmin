import React from 'react'
import HeadAndDesc from './HeadAndDesc'
import mockImage from '../../public/serverImages/beltedDresses/belted1.jpg'

export default function ViewOrders() {
    

    const allOrders = [
        {
            id: 1, image: mockImage, code: 12345, date: 'Jul 20, 2021', paymentmethod: "paypal", status: "approved", price: 15
        },
        {
            id: 1, image: mockImage, code: 12345, date: 'Jul 20, 2021', paymentmethod: "card", status: "refunded", price: 50
        },
        {
            id: 1, image: mockImage, code: 12345, date: 'Jul 20, 2021', paymentmethod: "transfer", status: "pending", price: 70
        },
        {
            id: 1, image: mockImage, code: 12345, date: 'Jul 20, 2021', paymentmethod: "paypal", status: "approved", price: 20
        },
        {
            id: 1, image: mockImage, code: 12345, date: 'Jul 20, 2021', paymentmethod: "paypal", status: "approved", price: 35
        },
        {
            id: 1, image: mockImage, code: 12345, date: 'Jul 20, 2021', paymentmethod: "paystack", status: "pending", price: 12
        },
        {
            id: 1, image: mockImage, code: 12345, date: 'Jul 20, 2021', paymentmethod: "paypal", status: "approved", price: 23
        },
        {
            id: 1, image: mockImage, code: 12345, date: 'Jul 20, 2021', paymentmethod: "direct deposit", status: "approved", price: 56
        },
        {
            id: 1, image: mockImage, code: 12345, date: 'Jul 20, 2021', paymentmethod: "paypal", status: "refunded", price: 78
        },
        {
            id: 1, image: mockImage, code: 12345, date: 'Jul 20, 2021', paymentmethod: "skrill", status: "approved", price: 100
        },
    ]

    return (
        <div className=' w-full '>
            <div>
                <HeadAndDesc head={"order list"} desc={"multikart admin panel"} />
            </div>

            <div className=' bg-white p-5 w-[100%] overflow-hidden my-5 '>

                <div className="relative w-fit my-5 " >
                    <input
                        type="text"
                        placeholder="search"
                        className="bg-gray-100 pl-10 pr-10 py-2  max-w-[400px]"
                    />
                    <i className="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                </div>

                <div className=' overflow-x-scroll custom-scrollbar '>
                    <table>
                        <th className=' flex md:gap-5 [&>*]:min-w-[150px] md:[&>*]:min-w-[200px]
                            overflow-x-scroll custom-scrollbar bg-gray-200
                            py-3 capitalize text-gray-700 border-b border-gray-300 '>
                            <td>order image</td>
                            <td>order code</td>
                            <td>date</td>
                            <td>payment method</td>
                            <td>delivery status</td>
                            <td>amount</td>
                            <td>options</td>
                        </th>
                        {
                            allOrders.map((row, index) => {
                                return (
                                    <tr key={index}
                                        className=' flex md:gap-5 [&>*]:min-w-[150px] md:[&>*]:min-w-[200px]
                                        overflow-x-scroll custom-scrollbar bg-white [&>*]:text-center
                                        py-3 capitalize text-gray-700 border-b border-gray-300 [&>*]:my-auto '>
                                        <td>
                                            <img src={row.image} alt={row.id}
                                                className=' h-[50px] mx-auto ' />
                                        </td>
                                        <td>{row.code}</td>
                                        <td>{row.date}</td>
                                        <td>{row.paymentmethod}</td>
                                        <td>
                                            <p className={`w-fit mx-auto px-2 border
                                                        ${row.status == "approved" && ("bg-[#00800022] border-[green] text-[green]")}
                                                        ${row.status == "refunded" && ("bg-[#ff000022] border-[red] text-[red]")}
                                                        ${row.status == "pending" && ("bg-[#00000022] border-[black] text-[black]")}`}>
                                                {row.status}
                                            </p>
                                        </td>
                                        <td>${row.price}</td>
                                        <td className=' flex gap-3 justify-center '>
                                            <i className='pi pi-pen-to-square'></i>
                                            <i className='pi pi-trash'></i>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}
