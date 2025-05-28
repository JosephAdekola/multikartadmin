import React, { useEffect, useRef, useState } from 'react'
import HeadAndDesc from './HeadAndDesc'
import placeHolderImage from "../../public/serverImages/beltedDresses/belted1.jpg"
import ButtonComp from './ButtonComp'
import FormComp from './FormComp'
import { getSingleProduct, postNewProduct, productUpdater } from '../utils/apiCalls/products'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditProduct() {
    
    const plusIcon = [
            { id: 1, icon: "pi pi-plus", remove: "pi pi-minus" },
            { id: 1, icon: "pi pi-plus", remove: "pi pi-minus" },
            { id: 1, icon: "pi pi-plus", remove: "pi pi-minus" },
            { id: 1, icon: "pi pi-plus", remove: "pi pi-minus" },
            { id: 1, icon: "pi pi-plus", remove: "pi pi-minus" }
        ]
    
        const [image1, setImage1] = useState("")
        const [image2, setImage2] = useState("")
        const [image3, setImage3] = useState("")
        const [image4, setImage4] = useState("")
        const [image5, setImage5] = useState("")
    
        const [uploadedImages, setUploadedImages] = useState([false, false, false, false, false])
    
        const [imagePublicId, setImagePublicId] = useState(["", "", "", "", ""])
    
        const hiddenInputElement = useRef([])
    
        const triggerImageUpload = (index) => {
            hiddenInputElement.current[index].click();
        }
    
        const imageUplodHandler = async (e, index) => {
            const file = e.target.files
            const data = new FormData()
            data.append("file", file[0])
            data.append('upload_preset', "multikart_products_preset")
    
            try {
                const response = await fetch("https://api.cloudinary.com/v1_1/dhisrjyds/image/upload", {
                    method: "POST",
                    body: data
                })
    
                const cloudData = await response.json()
    
                if (index == 0) {
                    setImage1(cloudData.secure_url)
                }
                if (index == 1) {
                    setImage2(cloudData.secure_url)
                }
                if (index == 2) {
                    setImage3(cloudData.secure_url)
                }
                if (index == 3) {
                    setImage4(cloudData.secure_url)
                }
                if (index == 4) {
                    setImage5(cloudData.secure_url)
                }
    
                if (cloudData) {
                    const updatedImages = [...uploadedImages]
                    updatedImages[index] = true
                    setUploadedImages(updatedImages)
    
                    const updatedImagePublicId = [...imagePublicId]
                    updatedImagePublicId[index] = cloudData.public_id
                    setImagePublicId(updatedImagePublicId)
    
                }
            } catch (error) {
                console.log("their was an error while uploading the product image", error);
    
            }
        }
    
        const triggerImagedelete = (index) => {
            if (index === 0) {
                setImage1('')
                const updatedImages = [...uploadedImages]
                updatedImages[index] = false
                setUploadedImages(updatedImages)
            }
    
            if (index === 1) {
                setImage2('')
                const updatedImages = [...uploadedImages]
                updatedImages[index] = false
                setUploadedImages(updatedImages)
            }
    
            if (index === 2) {
                setImage3('')
                const updatedImages = [...uploadedImages]
                updatedImages[index] = false
                setUploadedImages(updatedImages)
            }
    
            if (index === 3) {
                setImage4('')
                const updatedImages = [...uploadedImages]
                updatedImages[index] = false
                setUploadedImages(updatedImages)
            }
    
            if (index === 4) {
                setImage5('')
                const updatedImages = [...uploadedImages]
                updatedImages[index] = false
                setUploadedImages(updatedImages)
            }
        }
        const [fetched, setFetched] = useState({})
        const [title, setTitle] = useState("")
        const [price, setPrice] = useState(0)
        const [productCode, setProductCode] = useState("")
        const [oldPrice, setOldPrice] = useState(0)
        const [totalQuantity, setTotalQuantity] = useState(0)
        const [size, setSize] = useState([])
        const [colors, setColors] = useState([])
        const [details, setDetails] = useState("")
        const [category, setCategory]=useState("")
    

        const navigate = useNavigate()
        const updateProductHandler = async(e) => {
            e.preventDefault()
            
            const payload = {
                images: [image1 && (image1), 
                        image2 && (image2), 
                        image3 && (image3), 
                        image4 && (image4), 
                        image5 && (image5)].filter(Boolean),
                title: title,
                price: price,
                sizes: size,
                colour: colors,
                productCode: productCode,
                category: category,
                old_price: oldPrice,
                quantity: totalQuantity,
                productDetail: details
            }
            
    
            try {
                const res = await productUpdater(payload)
                if (res) {
                    alert(res.data.message)

                    setImage1("")  
                    setImage2("")               
                    setImage3("")               
                    setImage4("")               
                    setImage5("")               
                    setTitle("")
                    setPrice("")
                    setOldPrice("")
                    setTotalQuantity("")
                    setProductCode("")
                    setDetails("")
                    setSize("")
                    setColors("")
                    setCategory("")

                    navigate("/allproduct")
                }
            } catch (error) {
                if (error.response) {
                    console.log(error.response);
                    
                    return alert(error.response.data.error)
                }
    
                if (error.message) {
                    console.log("axios error", error.message);
                    return;                    
                }
                if (error.request) {
                    console.log("request was not sent", error);
                    
                }
                
            }
        }
        const getId = useParams()
        const{code} = getId
        
        
        useEffect(()=>{
            const fetchProduct = async () => {
                try {
                    const res = await getSingleProduct(code)
                    setFetched(res.data)
                    const updater = res.data   
                    
                    setImage1(updater.images[0])  
                    setImage2(updater.images[1])               
                    setImage3(updater.images[2])               
                    setImage4(updater.images[3])               
                    setImage5(updater.images[4])               
                    setTitle(updater.title)
                    setPrice(updater.price)
                    setOldPrice(updater.old_price)
                    setTotalQuantity(updater.quantity)
                    setProductCode(updater.productCode)
                    setDetails(updater.productDetail)
                    setSize(updater.sizes)
                    setColors(updater.colour)
                    setCategory(updater.category.name)
                    
                } catch (error) {
                    console.error(error);                  
                    
                }
            }
            
            fetchProduct()
        }, [code])

    return (

        <div>
                    <div className=' mb-5 ' >
                        <HeadAndDesc head={"edit product"} desc={"multikart admin panel"} />
                    </div>
                    <div className=' p-5 bg-white '>
                        <div className=' grid grid-cols-2 gap-5 '>
                            <div className=' bg-amber-200 '>
                                <img src={placeHolderImage} className=' h-full w-full object-cover ' alt="" />
                            </div>
                            <div className=' flex flex-col gap-3 '>
                                {
                                    plusIcon.map((icon, index) => {
                                        return (
                                            <div key={index} className=' flex gap-5 '>
                                                <input type="file" ref={el => hiddenInputElement.current[index] = el}
                                                    onChange={(e) => imageUplodHandler(e, index)}
                                                    className=' hidden ' />
                                                <i onClick={() => triggerImageUpload(index)} className={`${icon.icon} p-5 bg-gray-200
                                                    w-fit text-[#ec8951] h-fit my-auto ${uploadedImages[index] ? "cursor-not-allowed opacity-50" : 'cursor-pointer'} `}
                                                    style={{ pointerEvents: uploadedImages[index] ? "none" : "auto" }}></i>
                                                <img src={index == 0 ? image1 :
                                                    index == 1 ? image2 :
                                                        index == 2 ? image3 :
                                                            index == 3 ? image4 :
                                                                index == 4 ? image5 : ""} alt="product image"
                                                    className={`w-[50px] h-[100px] object-contain 
                                                            ${(!image1 && index === 0) ||
                                                            (!image2 && index === 1) ||
                                                            (!image3 && index === 2) ||
                                                            (!image4 && index === 3) ||
                                                            (!image5 && index === 4) ? "hidden" : ""} `} />
                                                <i className={`${icon.remove} p-5 bg-gray-200 w-fit text-[#ec8951] h-fit my-auto
                                                        ${!uploadedImages[index] ? "cursor-not-allowed opacity-50" : 'cursor-pointer'}`}
                                                    style={{ pointerEvents: !uploadedImages[index] ? "none" : "auto" }}
                                                    onClick={() => triggerImagedelete(index)}>
        
                                                </i>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className=' my-5 '>
        
                            {<FormComp textField={"title:"} stringSetter={setTitle} textDisplay='block' textDisplaymd='flex' textInputValue={title} />}
                            {<FormComp numberField={"price:"} integerSetter={setPrice} numberDisplay='block' numberDisplaymd='flex' numberInputValue={price} />}
                            {<FormComp numberField={"old price:"} integerSetter={setOldPrice} numberDisplay='block' numberDisplaymd='flex' numberInputValue={oldPrice} />}
                            {<FormComp numberField={"total Product:"} integerSetter={setTotalQuantity} numberDisplay='block' numberDisplaymd='flex' numberInputValue={totalQuantity} />}
                            {<FormComp textField={"product code:"} stringSetter={setProductCode} textDisplay='block' textDisplaymd='flex' textInputValue={fetched.productCode} />}
                            {<FormComp selectField={"category"} selectDisplay='block' selectDisplaymd='flex' stringSetter={setCategory} 
                                selectField1opt1={"Ladies Wear"} selectField1opt2={"Ladies Shoes"} selectField1opt3={"Men Wears"} selectInputValue={category} 
                                selectField1opt4={"Men Shoes"} />}{<FormComp textAreaField={"product details:"} textAreaDisplay='block' textAreaDisplaymd='flex' stringSetter={setDetails} textAreaInputValue={details} />}
                            {<FormComp checkboxLabel={"available sizes:"} checkBoxDisplay='block' checkBoxDisplaymd='flex' 
                                checkboxOption1={"SM"} checkboxOption2={"MD"} checkboxOption3={"LG"} checkboxOption4={"XL"} selectedOption={size} setSelectedOptions={setSize} 
                                checkBoxesOption1Value={"sm"} checkBoxesOption2Value={"md"} checkBoxesOption3Value={"LG"} checkBoxesOption4Value={"XL"} />}
                            {<FormComp checkboxLabel={"available colors:"} checkBoxDisplay='block' checkBoxDisplaymd='flex' 
                                checkboxOption1={"black"} checkboxOption2={"Blue"} checkboxOption3={"Green"} checkboxOption4={"Red"} selectedOption={colors} setSelectedOptions={setColors} 
                                checkBoxesOption1Value={"bg-black"} checkBoxesOption2Value={"bg-blue-500"} checkBoxesOption3Value={"bg-green-500"} checkBoxesOption4Value={"bg-red-500"} />}
        
                            <div className=' flex justify-center '>
                                {<FormComp button1={<ButtonComp text={"update"} bground={"bg-[#ec8951]"} textFill={"text-white"} performFunction={updateProductHandler} />} />}
                                {<FormComp button2={<ButtonComp text={"discard"} bground={"bg-gray-200"} textFill={"text-black"} />} />}
                            </div>
        
                        </div>
                    </div>
                </div>
    )
}
