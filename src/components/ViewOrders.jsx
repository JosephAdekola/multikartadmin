import React, { useEffect, useState } from 'react'
import HeadAndDesc from './HeadAndDesc'
import Table from './Table'
import { changeOrderStatus, getAllOrders } from '../utils/apiCalls/orders'
import { userAuth } from '../utils/atomsAndSelectors/userAtoms'
import { useRecoilValue } from 'recoil'
import ButtonComp from './ButtonComp'

export default function ViewOrders() {

    const getUser = useRecoilValue(userAuth)


    const [gbogboOrder, setGbogboOrder] = useState([])
    const [toBeEditedId, setToBeEditedId] = useState('')
    const [displayChangeBox, setDisplayChangeBox] = useState(false)
    const [newOrderStatus, setNewOrderStatus] = useState("")

    const payload = {
        headers: {
            Authorization: `Bearer ${getUser.token}`,
        },
    };

    const fetchAllOrders = async () => {
        try {
            const res = await getAllOrders(payload);
            if (res) {

                res.data.data.forEach((order) => {
                    order.item1 = order.items[0].product.images[0]
                    order.item2 = order._id
                    order.item3 = new Date(order.createdAt).toISOString().split('T')[0]
                    order.item4 = order.postalCode
                    order.item5 = order.status
                    order.item6 = order.total
                })

                setGbogboOrder(res.data.data);
            }
        } catch (error) {
            console.log('Error fetching orders:', error);
        }
    };

    const changeBoxToggle = (id) => {
        setToBeEditedId(id);
        setDisplayChangeBox(true)
    }

    const changeStatusHandler = async (e) => {
        e.preventDefault()
        
    const validStatuses = ["pending", "paid", "processing", "shipped", "delivered"];

    if (!validStatuses.includes(newOrderStatus)) {
        alert("please select a valid status");
        return;
    }

    const payload = {
        id: toBeEditedId,
        status: newOrderStatus
    };

    const config = {
        headers: {
            Authorization: `Bearer ${getUser.token}`
        }
    };

    try {
        const res = await changeOrderStatus(payload, config);
        
        if (res) {
            console.log("i got here");
            alert(res.data.message);
            setDisplayChangeBox(false)
        }
    } catch (error) {
        console.log(error);
        
        if (error.response) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    }
};



    useEffect(() => {
        fetchAllOrders()

    }, [])
    

    return (
        <div className=' w-full '>
            <div className={`w-fit h-fit bg-gray-300 flex justify-center items-center fixed 
                            top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10
                            ${!displayChangeBox && ("hidden")}`}>
                <form onSubmit={e=>changeStatusHandler(e)}
                    className='flex flex-col gap-2 min-w-[300px] max-w-[300px] p-5'>
                    <label>
                        <p>you are about to change the stutus of the order with order number: </p>
                        <select name="" id="" className='border w-full px-3'
                                onChange={e=>setNewOrderStatus(e.target.value)}>
                            <option value="">select an option</option>
                            <option value="pending">pending</option>
                            <option value="paid">paid</option>
                            <option value="processing">processing</option>
                            <option value="shipped">shipped</option>
                            <option value="delivered">delivered</option>
                        </select>
                    </label>
                    <div className=' flex justify-between '>
                        <ButtonComp
                            text={"change"}
                            bground={"bg-[#ec8951]"}
                            textFill={"text-white"}
                            performFunction={(e)=>changeStatusHandler(e)}
                        /><ButtonComp
                            text={"cancel"}
                            bground={"bg-gray-500"}
                            textFill={"text-white"}
                            performFunction={(e) => { e.preventDefault(); setDisplayChangeBox(false) }}
                        />
                    </div>
                </form>
            </div>
            <div>
                <HeadAndDesc head={"order list"} />
            </div>

            <div className=' w-full '>
                <Table head1={"order image"} head2={"order code"} head3={"date"} head4={"postal code"}
                    head5={"delivery status"} head6={"amount"} head7={"option"} bodyArray={gbogboOrder}
                    editEntry={changeBoxToggle} />
            </div>
        </div>
    )
}
