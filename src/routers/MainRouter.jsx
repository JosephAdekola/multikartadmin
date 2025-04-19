import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Dashboard from '../components/Dashboard'
import AddProducts from '../components/AddProducts'
import EditProduct from '../components/EditProduct'
import AllProduct from '../components/AllProduct'
import ViewOrders from '../components/ViewOrders'
import CreateOrder from '../components/CreateOrder'
import EditOrders from '../components/EditOrders'
import DeleteOrder from '../components/DeleteOrder'
import OrderStatus from '../components/OrderStatus'
import AllUsers from '../components/AllUsers'
import ChangeUserRole from '../components/ChangeUserRole'
import AddUser from '../components/AddUser'
import DeleteUser from '../components/DeleteUser'

function MainRouter() {
    const myRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='addproduct' element={<AddProducts />} />
                <Route path='editproduct' element={<EditProduct />} />
                <Route path='allproduct' element={<AllProduct />} />
                <Route path='vieworders' element={<ViewOrders />} />
                <Route path='createorders' element={<CreateOrder />} />
                <Route path='editorders' element={<EditOrders />} />
                <Route path='deleteorders' element={<DeleteOrder />} />
                <Route path='orderstatus' element={<OrderStatus />} />
                <Route path='allusers' element={<AllUsers />} />
                <Route path='changeuserrole' element={<ChangeUserRole />} />
                <Route path='adduser' element={<AddUser />} />
                <Route path='deleteusers' element={<DeleteUser />} />
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