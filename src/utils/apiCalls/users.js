import axios from "axios"

const BaseURL = `${import.meta.env.VITE_APIBASEURL}/api/v1/users`


export const addUser = (payload)=>{
    const response = axios.post(`${BaseURL}/register`, payload)
    return response
}

export const signAdminIn = (payload) =>{
    const response = axios.post(`${BaseURL}/admin-sign-in`, payload)
    return response
}

export const authenticateUser = (payload) =>{
    const response = axios.post(`${BaseURL}/authentication`, payload)
    return response
}

export const verifyOtp = (payload) => {
    const response = axios.post(`${BaseURL}/verify-otp`, payload)
    return response
}

export const resendOTp = (payload) => {
    const response = axios.post(`${BaseURL}/resend-otp`, payload)
    return response
}

export const allUser = () => {
    const response = axios.get(`${BaseURL}/all-users`)
    return response
}

export const deleteUser = (payload) => {
    const response = axios.post(`${BaseURL}/delete-user`, payload)
    return response
}