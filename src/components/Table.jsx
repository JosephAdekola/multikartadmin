import React from 'react'
import ButtonComp from './ButtonComp'

function Table({ head1, head2, head3, head4, head5, head6, head7, bodyArray = [], buttonPart }) {
    return (
        <div className=' bg-white p-5 w-[100%] overflow-hidden my-5 '>

            <div className=' md:flex justify-between mb-5 '>
                <div className="relative w-fit my-5 " >
                    <input
                        type="text"
                        placeholder="search"
                        className="bg-gray-100 pl-10 pr-10 py-2  max-w-[400px]"
                    />
                    <i className="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                </div>

                <div className=' my-auto '>
                    {buttonPart}
                </div>
            </div>

            <div className=' overflow-x-scroll custom-scrollbar '>
                <table>
                    <th className=' flex md:gap-5 [&>*]:min-w-[150px] md:[&>*]:min-w-[200px]
                            overflow-x-scroll custom-scrollbar bg-gray-200 [&>*]:my-auto
                            py-3 capitalize text-gray-700 border-b border-gray-300 '>
                        <td>{head1}</td>
                        <td>{head2}</td>
                        <td>{head3}</td>
                        <td>{head4}</td>
                        <td>{head5}</td>
                        <td>{head6}</td>
                        <td>{head7}</td>
                    </th>
                    {
                        bodyArray.map((row, index) => {
                            return (
                                <tr key={index}
                                    className=' flex md:gap-5 [&>*]:min-w-[150px] md:[&>*]:min-w-[200px]
                                        overflow-x-scroll custom-scrollbar bg-white [&>*]:text-center
                                        py-3 capitalize text-gray-700 border-b border-gray-300 [&>*]:my-auto '>
                                    <td>
                                        <img src={row.item1} alt={row.id}
                                            className=' h-[50px] mx-auto ' />
                                    </td>
                                    <td>{row.item2}</td>
                                    <td>{row.item3}</td>
                                    <td>{row.item4}</td>
                                    <td>
                                        <p className={`w-fit mx-auto px-2 ${row.item5 == "approved" ? "border" : row.item5 == "refunded" ? "border" : row.item5 == "pending" ? "border" : ""}
                                                        ${row.item5 == "approved" && ("bg-[#00800022] border-[green] text-[green]")}
                                                        ${row.item5 == "refunded" && ("bg-[#ff000022] border-[red] text-[red]")}
                                                        ${row.item5 == "pending" && ("bg-[#00000022] border-[black] text-[black]")}`}>
                                            {row.item5}
                                        </p>
                                    </td>
                                    <td>${row.item6}</td>
                                    <td>
                                        {row.item7}
                                    </td>
                                    {/* <td className=' flex gap-3 justify-center '>
                                            <i className='pi pi-pen-to-square'></i>
                                            <i className='pi pi-trash'></i>
                                        </td> */}
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default Table