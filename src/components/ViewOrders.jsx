import React from 'react'
import HeadAndDesc from './HeadAndDesc'
import mockImage from '../../public/serverImages/beltedDresses/belted1.jpg'
import Table from './Table'
import EditDeleteIcons from './EditDeleteIcons'

export default function ViewOrders() {
    

    const allOrders = [
        {
            id: 1, item1: mockImage, item2: 12345, item3: 'Jul 20, 2021', item4: "paypal", item5: "approved", item6: 15, item7: EditDeleteIcons()
        },
        {
            id: 1, item1: mockImage, item2: 12345, item3: 'Jul 20, 2021', item4: "card", item5: "refunded", item6: 50, item7: EditDeleteIcons()
        },
        {
            id: 1, item1: mockImage, item2: 12345, item3: 'Jul 20, 2021', item4: "transfer", item5: "pending", item6: 70, item7: EditDeleteIcons()
        },
        {
            id: 1, item1: mockImage, item2: 12345, item3: 'Jul 20, 2021', item4: "paypal", item5: "approved", item6: 20, item7: EditDeleteIcons()
        },
        {
            id: 1, item1: mockImage, item2: 12345, item3: 'Jul 20, 2021', item4: "paypal", item5: "approved", item6: 35, item7: EditDeleteIcons()
        },
        {
            id: 1, item1: mockImage, item2: 12345, item3: 'Jul 20, 2021', item4: "paystack", item5: "pending", item6: 12, item7: EditDeleteIcons()
        },
        {
            id: 1, item1: mockImage, item2: 12345, item3: 'Jul 20, 2021', item4: "paypal", item5: "approved", item6: 23, item7: EditDeleteIcons()
        },
        {
            id: 1, item1: mockImage, item2: 12345, item3: 'Jul 20, 2021', item4: "direct deposit", item5: "approved", item6: 56, item7: EditDeleteIcons()
        },
        {
            id: 1, item1: mockImage, item2: 12345, item3: 'Jul 20, 2021', item4: "paypal", item5: "refunded", item6: 78, item7: EditDeleteIcons()
        },
        {
            id: 1, item1: mockImage, item2: 12345, item3: 'Jul 20, 2021', item4: "skrill", item5: "approved", item6: 10, item7: EditDeleteIcons()
        },
    ]

    return (
        <div className=' w-full '>
            <div>
                <HeadAndDesc head={"order list"} />
            </div>

            <div>
                <Table head1={"order image"} head2={"order code"} head3={"date"} head4={"payment method"}
                    head5={"delivery status"} head6={"amount"} head7={"option"} bodyArray={allOrders} />
            </div>
        </div>
    )
}
