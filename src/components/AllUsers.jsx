import React, { useEffect, useState } from 'react'
import HeadAndDesc from './HeadAndDesc'
import ButtonComp from './ButtonComp'
import { allUser, deleteUser } from '../utils/apiCalls/users'
import headshot from "../assets/headshot.jpg"
import { useNavigate } from 'react-router-dom'

export default function AllUsers() {

    const [userArray, setUserArray] = useState([])
    const [checkedUser, setCheckedUser] = useState([])
    const navigate = useNavigate()

    //pagenation data
    const rowPerPage = 5
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(userArray.length / rowPerPage)
    const startIndex = (currentPage - 1) * rowPerPage
    const pagenatedRow = userArray.slice(startIndex, startIndex + rowPerPage)

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1)
        }
    }
    //pagenation data ends here


    const userCheckBoxHandler = (e) => {
        const { checked, value } = e.target
        setCheckedUser(prev => [...prev, value])

    }

    const usersModifier = async () => {
        if (!checkedUser || checkedUser.length === 0) {
            alert("No users selected for deletion.");
            return;
        }

        const payload = { items: checkedUser };

        try {
            const res = await deleteUser(payload);
            if (res && res.data) {
                alert(res.data.message);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data.message);
            } else {
                alert("Unable to delete the user(s). Please try again later.");
                console.error("Delete error:", error);
            }
        }
    };



    useEffect(() => {
        const fetchAllUser = async () => {
            try {
                const res = await allUser()
                if (res) {
                    setUserArray(res.data)
                }
            } catch (error) {
                console.log(error);

            }
        }
        fetchAllUser()
    }, [])


    return (
        <div>
            <div>
                <HeadAndDesc head={"user list"} />
            </div>
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
                        <ButtonComp text={"create user"} bground={"bg-[#ec8951]"} textFill={"text-white"} performFunction={() => navigate("/adduser")} />
                    </div>
                </div>

                <div className=' overflow-x-scroll custom-scrollbar '>
                    <table className=' mx-auto '>
                        <th className=' flex md:gap-5 [&>*]:min-w-[150px] md:[&>*]:min-w-[200px]
                overflow-x-scroll custom-scrollbar bg-gray-200 [&>*]:my-auto
                py-3 capitalize text-gray-700 border-b border-gray-300 '>
                            <td>{<ButtonComp text={"delete"} bground={"bg-[#ec8951]"} textFill={"text-white"} performFunction={usersModifier} />}</td>
                            <td>avatar</td>
                            <td>first name</td>
                            <td>last name</td>
                            <td>email</td>
                            <td>last login</td>
                            <td>role</td>
                        </th>
                        {
                            pagenatedRow.map((row, index) => {
                                return (
                                    <tr key={index}
                                        className=' flex md:gap-5 [&>*]:min-w-[150px] md:[&>*]:min-w-[200px]
                                                overflow-x-scroll custom-scrollbar bg-white [&>*]:text-center
                                                py-3 capitalize text-gray-700 border-b border-gray-300 [&>*]:my-auto '>
                                        <td>
                                            <input type="checkbox" value={row.email} onChange={e => userCheckBoxHandler(e)} />
                                        </td>
                                        <td>
                                            <img src={headshot} alt={row.firstName}
                                                className=' h-[50px] mx-auto ' />
                                        </td>
                                        <td>{row.firstName}</td>
                                        <td>{row.lastName}</td>
                                        <td className=' lowercase '>{row.email}</td>
                                        <td>{row.updatedAt}</td>
                                        <td>
                                            {row.role}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
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
            </div>
        </div>
    )
}
