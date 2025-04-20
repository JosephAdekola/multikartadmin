import React from 'react'
import HeadAndDesc from './HeadAndDesc'
import mockImage from "../../public/serverImages/beltedDresses/belted1.jpg"

export default function OrderDetails() {

  const orderDetailsData = [
    { id: 1, image: mockImage, name: "men's sweatshirt", quantity: "1", price: 63.54 },
    { id: 2, image: mockImage, name: "men's sweatshirt", quantity: "1", price: 63.54 },
    { id: 3, image: mockImage, name: "men's sweatshirt", quantity: "1", price: 63.54 },
  ]

  return (
    <div>
      <div>
        <HeadAndDesc head={"order details"} />
      </div>

      <div className='md:flex gap-5 my-5 p-5 bg-white'>
        <div className=' md:w-[60%] '>
          <div className=' capitalize text-2xl font-semibold p-5 
                  bg-linear-to-r from-[#ec8a5135] to-[white] '>
            <h3>order number: #31684321</h3>
          </div>

          <div className=' flex justify-between uppercase px-5 my-3 border-t border-b
                border-gray-300 py-3 text-xl font-semibold '>
            <h3>items</h3>
            <h3>edit items</h3>
          </div>

          <div>
            {
              orderDetailsData.map((detail, index) => {
                return (
                  <div key={index}
                    className=' capitalize grid grid-cols-4 gap-5 my-5 '>
                    <div>
                      <img src={detail.image} alt={detail.name}
                        className=' w-[100px] h-[100px] object-cover ' />
                    </div>
                    <div>
                      <p>product name:</p>
                      <p className=' text-gray-500 '>{detail.name}</p>
                    </div>
                    <div>
                      <p>quantity:</p>
                      <p className=' text-gray-500 '>{detail.quantity}</p>
                    </div>
                    <div>
                      <p>price:</p>
                      <p className=' text-gray-500 '>${detail.price}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className='uppercase px-5 my-3 border-t border-b
                border-gray-300 text-gray-500 py-3 text-lg '>
            <div className='flex justify-between'>
              <p>subtotal</p>
              <p>$55.00</p>
            </div>
            <div className='flex justify-between'>
              <p>shipping:</p>
              <p>$55.00</p>
            </div>
            <div className='flex justify-between'>
              <p>{`tax(GST):`}</p>
              <p>$55.00</p>
            </div>

            <div className='uppercase my-3 border-t border-b
                border-gray-300 font-bold text-gray-700 py-3 text-lg '>
              <div className='flex justify-between'>
                <p>total</p>
                <p>$55.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' md:w-[40%] flex flex-col gap-5 '>
          <div className=' border border-gray-400 p-5 bg-gray-200 capitalize '>
            <h3 className=' text-xl font-bold '>summary</h3>
            <p>order id: 5563853658932</p>
            <p>order date: October 22, 2021</p>
            <p>order total: $900.00</p>
          </div>

          <div className=' border border-gray-400 p-5 bg-gray-200 capitalize '>
            <h3 className=' text-xl font-bold '>shipping address</h3>
            <p>Gerg Harvell
              568, Suite Ave.
              Austrlia, 235153 Contact No. 48465465465</p>
          </div>

          <div className=' border border-gray-400 p-5 bg-gray-200 capitalize '>
            <h3 className=' text-xl font-bold '>payment method</h3>
            <p>cash on delivery</p>
          </div>

          <div className=' border border-gray-400 p-5 bg-gray-200 capitalize '>
            <p>expected delivery date</p>
            <h3 className=' text-xl font-bold '>October 22, 2021</h3>
            <p className=' font-bold text-[#ec8a51] '>track order</p>
          </div>
        </div>
      </div>
    </div>
  )
}

