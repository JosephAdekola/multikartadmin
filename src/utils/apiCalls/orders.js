import axios from "axios"

const BaseURL = `${import.meta.env.VITE_APIBASEURL}/api/v1/order`
// const BaseURL = `http://localhost:7077/api/v1/order`

export const getAllOrders = (config) => {
    const response = axios.get(`${BaseURL}/all-orders`, config )
    return response
}

export const changeOrderStatus = (payload, config) => {
    const response = axios.post(`${BaseURL}/change-status`, payload, config )
    return response
}

export const getOrderDetails = (payload, config) => {
    const response = axios.post(`${BaseURL}/order-details`, payload, config )
    return response
}