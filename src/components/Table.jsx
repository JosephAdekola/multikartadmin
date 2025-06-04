import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Table({
    head1,
    head2,
    head3,
    head4,
    head5,
    head6,
    head7,
    bodyArray = [],
    buttonPart,
    editEntry
}) {
    const rowsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(bodyArray.length / rowsPerPage);

    // Calculate which rows to display on the current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedRows = bodyArray.slice(
        startIndex,
        startIndex + rowsPerPage
    );

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const navigate = useNavigate()

    return (
        <div className="bg-white p-5 w-full overflow-hidden my-5">
            <div className="md:flex justify-between mb-5">
                <div className="relative w-fit my-5">
                    <input
                        type="text"
                        placeholder="search"
                        className="bg-gray-100 pl-10 pr-10 py-2 max-w-[400px]"
                    />
                    <i className="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                </div>

                <div className="my-auto">{buttonPart}</div>
            </div>

            <div className="overflow-x-scroll custom-scrollbar w-full">
                <table className="mx-auto">
                    <thead>
                        <tr
                            className="
                flex md:gap-5 [&>*]:min-w-[150px] md:[&>*]:min-w-[200px]
                overflow-x-scroll custom-scrollbar bg-gray-200 [&>*]:my-auto
                py-3 capitalize text-gray-700 border-b border-gray-300
              "
                        >
                            <th>{head1}</th>
                            <th>{head2}</th>
                            <th>{head3}</th>
                            <th>{head4}</th>
                            <th>{head5}</th>
                            <th>{head6}</th>
                            <th>{head7}</th>
                        </tr>
                    </thead>

                    <tbody>
                        {paginatedRows.map((row, index) => (
                            <tr
                                key={startIndex + index}
                                className="
                  flex md:gap-5 [&>*]:min-w-[150px] md:[&>*]:min-w-[200px]
                  overflow-x-scroll custom-scrollbar bg-white [&>*]:text-center
                  py-3 capitalize text-gray-700 border-b border-gray-300 [&>*]:my-auto
                "
                            >
                                <td>
                                    <img src={row.item1} className="h-[50px] mx-auto" />
                                </td>
                                <td>{row.item2}</td>
                                <td>{row.item3}</td>
                                <td>{row.item4}</td>
                                <td>
                                    <p
                                        className={`
                      w-fit mx-auto px-2 ${row.item5 === 'approved' ? 'border' : ''
                                            } ${row.item5 === 'refunded' ? 'border' : ''
                                            } ${row.item5 === 'pending' ? 'border' : ''
                                            } ${row.item5 === 'paid'
                                                ? 'bg-[#00800022] border-[green] text-[green]'
                                                : ''
                                            } ${row.item5 === 'processing'
                                                ? 'bg-[#0000ff22] border-[#0015ff] text-[#0015ff]'
                                                : ''
                                            } ${row.item5 === 'pending'
                                                ? 'bg-[#00000022] border-[black] text-[black]'
                                                : ''
                                            }
                    `}
                                    >
                                        {row.item5}
                                    </p>
                                </td>
                                <td>${row.item6}</td>
                                <td className="flex justify-center gap-3 [&>span]:cursor-pointer">
                                    <span className="pi pi-eye"
                                        onClick={()=>navigate(`/orderdetails/${row.item2}`)}></span>
                                    <span className="pi pi-file-edit"
                                        onClick={()=>editEntry(row.item2)}></span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-end items-center gap-2 mt-4">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded ${currentPage === 1
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-[#ec8951] text-white hover:bg-gray-300'}
                            cursor-pointer`}>
                    Prev
                </button>
                <span className="text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded ${currentPage === totalPages
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-[#ec8951] text-white hover:bg-gray-300'}
                            cursor-pointer`}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Table;
