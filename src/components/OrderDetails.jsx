import React, { useEffect, useState } from 'react'
import HeadAndDesc from './HeadAndDesc'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userAuth } from '../utils/atomsAndSelectors/userAtoms'
import { getOrderDetails } from '../utils/apiCalls/orders'

export default function OrderDetails() {
  const [orderDetails, setOrderDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { id: orderId } = useParams()
  const user = useRecoilValue(userAuth)

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        const payload = { id: orderId }
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }

        const res = await getOrderDetails(payload, config)
        setOrderDetails(res.data.data)
      } catch (err) {
        setError('Could not fetch order details.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchOrderDetail()
  }, [orderId, user.token])

  if (loading) return <p className="p-5">Loading order details...</p>
  if (error) return <p className="p-5 text-red-500">{error}</p>
  if (!orderDetails) return <p className="p-5">No order details found.</p>

  return (
    <div>
      <HeadAndDesc head={"order details"} />

      <div className='md:flex gap-5 my-5 p-5 bg-white'>
        {/* Left: Order Items */}
        <div className='md:w-[60%]'>
          <div className='text-2xl font-semibold p-5 bg-gradient-to-r from-[#ec8a5135] to-white capitalize'>
            <h3>order number: #{orderDetails?._id}</h3>
          </div>

          <div className='flex justify-between uppercase px-5 my-3 border-t border-b border-gray-300 py-3 text-xl font-semibold'>
            <h3>items</h3>
            <h3>edit items</h3>
          </div>

          <div>
            {orderDetails?.items?.map((detail, index) => (
              <div key={index} className='grid grid-cols-4 gap-5 my-5 capitalize'>
                <div>
                  <img
                    src={detail?.product?.images?.[0]}
                    alt={detail?.product?.title}
                    className='w-[100px] h-[100px] object-cover'
                  />
                </div>
                <div>
                  <p>product name:</p>
                  <p className='text-gray-500'>{detail?.product?.title}</p>
                </div>
                <div>
                  <p>quantity:</p>
                  <p className='text-gray-500'>{detail?.quantity}</p>
                </div>
                <div>
                  <p>price:</p>
                  <p className='text-gray-500'>${detail?.product?.price?.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='uppercase px-5 my-3 border-t border-b border-gray-300 text-gray-500 py-3 text-lg'>
            <div className='flex justify-between'>
              <p>subtotal</p>
              <p>${orderDetails?.total?.toFixed(2) || 'N/A'}</p>
            </div>
            <div className='flex justify-between'>
              <p>shipping</p>
              <p>${orderDetails?.shipping?.toFixed(2) || 'N/A'}</p>
            </div>
            <div className='flex justify-between'>
              <p>tax (GST)</p>
              <p>${orderDetails?.tax?.toFixed(2) || 'N/A'}</p>
            </div>

            <div className='uppercase my-3 border-t border-b border-gray-300 font-bold text-gray-700 py-3 text-lg'>
              <div className='flex justify-between'>
                <p>total</p>
                <p>${orderDetails?.total?.toFixed(2) || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className='md:w-[40%] flex flex-col gap-5'>
          <div className='border border-gray-400 p-5 bg-gray-200 capitalize'>
            <h3 className='text-xl font-bold'>summary</h3>
            <p>order id: {orderDetails?._id}</p>
            <p>order date: {new Date(orderDetails?.createdAt).toLocaleDateString()}</p>
            <p>order total: ${orderDetails?.total?.toFixed(2) || 'N/A'}</p>
          </div>

          <div className='border border-gray-400 p-5 bg-gray-200 capitalize'>
            <h3 className='text-xl font-bold'>shipping address</h3>
            <p>
              {orderDetails?.address}<br />
              {orderDetails?.city}, {orderDetails?.shippingAddress?.city}<br />
              {orderDetails?.state}, {orderDetails?.postalCode}<br />
              Contact: {orderDetails?.phone || "N/A"}
            </p>
          </div>

          <div className='border border-gray-400 p-5 bg-gray-200 capitalize'>
            <h3 className='text-xl font-bold'>payment method</h3>
            <p>{orderDetails?.paymentMethod || 'N/A'}</p>
          </div>

          <div className='border border-gray-400 p-5 bg-gray-200 capitalize'>
            <p>expected delivery date</p>
            <h3 className='text-xl font-bold'>
              {orderDetails?.deliveryDate
                ? new Date(orderDetails.deliveryDate).toLocaleDateString()
                : 'Not yet assigned'}
            </h3>
            <p className='font-bold text-[#ec8a51]'>track order</p>
          </div>
        </div>
      </div>
    </div>
  )
}
