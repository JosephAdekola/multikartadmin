import React, { useEffect, useState } from 'react'
import HeadAndDesc from './HeadAndDesc'
import ButtonComp from './ButtonComp'
import { allUser, deleteUser } from '../utils/apiCalls/users'
import headshot from "../assets/headshot.jpg"
import { useNavigate } from 'react-router-dom'

export default function AllUsers() {

    const [alluser, setAllUser] = useState([])
    const [checkedUser, setCheckedUser] = useState([])
    const navigate = useNavigate()

    const userCheckBoxHandler = (e)=>{
        const {checked, value} = e.target
        setCheckedUser(prev=>[...prev, value])
        
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
                    setAllUser(res.data)
                }
            } catch (error) {
                console.log(error);

            }
        }
        fetchAllUser()
    }, [])


    return (
        <div className=' mx-auto '>
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
                        <ButtonComp text={"create usergf"} bground={"bg-[#ec8951]"} textFill={"text-white"} performFunction={()=>navigate("/adduser")} />
                    </div>
                </div>

                <div className=' overflow-x-scroll custom-scrollbar '>
                    <table>
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
                            alluser.map((row, index) => {
                                return (
                                    <tr key={index}
                                        className=' flex md:gap-5 [&>*]:min-w-[150px] md:[&>*]:min-w-[200px]
                                                overflow-x-scroll custom-scrollbar bg-white [&>*]:text-center
                                                py-3 capitalize text-gray-700 border-b border-gray-300 [&>*]:my-auto '>
                                        <td>
                                            <input type="checkbox" value={row.email} onChange={e=>userCheckBoxHandler(e)} />
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
                </div>
            </div>
        </div>
        // <div>
        //     <div>
        //         <HeadAndDesc head={"user list"} />
        //     </div>

        //     <div>
        //         <Table head2={<ButtonComp text={"delete"} bground={"bg-[#ec8951]"} textFill={"text-white"} />} 
        //             head1={"avatar"} head3={"first name"} head4={"last name"} buttonPart={<ButtonComp text={"create user"} bground={"bg-[#ec8951]"} textFill={"text-white"} />}
        //             head5={"email"} head6={"last login"} head7={"role"} bodyArray={alluser} />
        //     </div>
        // </div>
    )
}
