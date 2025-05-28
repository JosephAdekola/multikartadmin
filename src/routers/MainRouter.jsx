import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Dashboard from '../components/Dashboard'
import AddProducts from '../components/AddProducts'
import EditProduct from '../components/EditProduct'
import AllProduct from '../components/AllProduct'
import ViewOrders from '../components/ViewOrders'
import AllUsers from '../components/AllUsers'
import AddUser from '../components/AddUser'
import OrderDetails from '../components/OrderDetails'
import ErrorPage from '../components/ErrorPage'

function MainRouter() {
    const myRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />} errorElement={<ErrorPage />}>
                <Route index element={<Dashboard />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='addproduct' element={<AddProducts />} />
                <Route path='editproduct/:code' element={<EditProduct />} />
                <Route path='allproduct' element={<AllProduct />} />
                <Route path='vieworders' element={<ViewOrders />} />
                <Route path='orderdetails' element={<OrderDetails />} />
                <Route path='allusers' element={<AllUsers />} />
                <Route path='adduser' element={<AddUser />} />
            </Route>
        )
    )
  return (
    <div>
        <RouterProvider router={myRouter} />
    </div>
  )
}

export default MainRouter