import axios from "axios"

const BaseURL = `${import.meta.env.VITE_APIBASEURL}/api/v1/metrics`
// const BaseURL = `http://localhost:7077/api/v1/metrics`

export const salesMetrics = (payload) => {
    const response = axios.post(`${BaseURL}/sales-metrics`, payload)
    return response
}

export const ordersNotification = () => {
    const response = axios.get(`${BaseURL}/orders-notification`)
    return response
}