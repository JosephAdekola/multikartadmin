import React from 'react'
import HeadAndDesc from './HeadAndDesc'
import Table from './Table'
import ButtonComp from './ButtonComp'
import mockImage from '../../public/serverImages/beltedDresses/belted1.jpg'

export default function AllUsers() {

    const allUserData = [
        {id: 1, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 2, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 3, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 4, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 5, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 6, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 7, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 8, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 9, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 10, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 11, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 12, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 13, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 14, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 15, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 16, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 17, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 18, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 19, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' },
        {id: 20, item2: "radio", item1: mockImage, item3: 'rowan', item4: 'torres', item5: 'rowantorres@gmail.com', item6: '6 days ago', item7: 'customer' }
    ]

  return (
    <div>
        <div>
            <HeadAndDesc head={"user list"} />
        </div>

        <div>
            <Table head2={<ButtonComp text={"delete"} bground={"bg-[#ec8951]"} textFill={"text-white"} />} 
                head1={"avatar"} head3={"first name"} head4={"last name"} buttonPart={<ButtonComp text={"create user"} bground={"bg-[#ec8951]"} textFill={"text-white"} />}
                head5={"email"} head6={"last login"} head7={"role"} bodyArray={allUserData} />
        </div>
    </div>
  )
}
