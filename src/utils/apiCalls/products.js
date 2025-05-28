import axios from "axios";


const BaseURL = `${import.meta.env.VITE_APIBASEURL}/api/v1/products`




export const postNewProduct = (payload)=>{
    const response = axios.post(`${BaseURL}/addproduct`, payload);
    return response;
}

export const getAllProducts = ()=>{
    const response = axios.get(`${BaseURL}/allproducts`)
    return response
}

export const getSingleProduct = (payload)=>{
    const response = axios.get(`${BaseURL}/singleProduct/${payload}`)
    return response
}

export const productUpdater = (payload)=>{
    const response = axios.post(`${BaseURL}/updateproduct`, payload)
    return response
}

export const productDeleter = (payload) => {
    const response =axios.post(`${BaseURL}/deleteproduct`, payload)
    return response
}
