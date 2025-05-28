import React, { useState } from 'react'
import HeadAndDesc from './HeadAndDesc'
import FormComp from './FormComp'
import ButtonComp from './ButtonComp'
import { addUser, resendOTp, verifyOtp } from '../utils/apiCalls/users'
import { useNavigate } from 'react-router-dom'

export default function AddUser() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const [displayOTP, setDisplayOTP] = useState(false)
  const [otp, setOtp] = useState("")
  const navigate = useNavigate()

  const addUserHandler = async (e) => {
    e.preventDefault()
    if (!firstName || !lastName || !email || !password || !phone || !country || !address || !postalCode) {
      alert("all fields are required")
      return;
    }
    if (password !== confirmPassword) {
      alert("please confirm your password before you proceed")
      return;
    }

    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email.toLocaleLowerCase().trim(),
      password: password,
      phone: phone,
      country: country,
      address: address,
      city: city,
      postalCode: postalCode
    }

    try {
      const response = await addUser(payload)
      if (response) {
        console.log(response);
        alert(response.data.message)
        setDisplayOTP(true)
      }

    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        alert(error.response.data.message)
        return;
      }
      if (error.message) {
        console.log("axios error", error);
        return
      }
      if (error.request) {
        console.log(error);

      }
    }
  }

  const OTPSendHandler = async () => {
    const payload = {
      email: email,
      otp: otp
    }

    try {
      const res = await verifyOtp(payload)
      if (res) {
        alert(res.data.message)
        setDisplayOTP(false)
        navigate("/allusers")

      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        alert(error.response.data.message)
        return;
      }
      if (error.message) {
        console.log("axios error", error);
        return
      }
      if (error.request) {
        console.log(error);

      }
    }
  }

  const OTPResendHandler = async () => {
    const payload = {
      email: email
    }

    try {
      const res = await resendOTp(payload)
      if (res) {
        alert(res.data.message)
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        alert(error.response.data.message)
        return;
      }
      if (error.message) {
        console.log("axios error", error);
        return
      }
      if (error.request) {
        console.log(error);

      }
    }
  }

  return (
    <div>

      {/* otp handler */}
      <div className={` p-10 bg-gray-200 fixed top-1/2 left-1/2 ${!displayOTP && ("hidden")}
                                  transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 justify-center z-10 `}>
        <p className=' text-center '>please enter your OTP below</p>
        <input type="text" value={otp} onChange={(e)=>{e.preventDefault(); setOtp(e.target.value); console.log(otp);
        }} className=' w-[100px] mx-auto rounded border text-center ' />
        <div className=' flex gap-3 justify-center '>
          {<ButtonComp text={"submit"} bground={"bg-[#ec8951]"} textFill={"text-white"} performFunction={OTPSendHandler} />}
          {<ButtonComp text={"resend otp"} bground={"bg-gray-500"} textFill={"text-white"} performFunction={OTPResendHandler} />}
        </div>
      </div>

      <div>
        <HeadAndDesc head={"create user"} />
      </div>

      <div className=' bg-white py-5 my-5 '>
        <FormComp textField={"first name:"} stringSetter={setFirstName} textDisplay='block' textDisplaymd='flex' />
        <FormComp textField={"last name:"} stringSetter={setLastName} textDisplay='block' textDisplaymd='flex' />
        <FormComp textField={"email:"} stringSetter={setEmail} textDisplay='block' textDisplaymd='flex' />
        <FormComp textField={"password:"} stringSetter={setpassword} textDisplay='block' textDisplaymd='flex' textInputType={"password"} />
        <FormComp textField={"confirm password:"} stringSetter={setConfirmPassword} textDisplay='block' textDisplaymd='flex' textInputType={"password"} />
        <FormComp textField={"phone:"} stringSetter={setPhone} textDisplay='block' textDisplaymd='flex' />
        <FormComp textField={"country:"} stringSetter={setCountry} textDisplay='block' textDisplaymd='flex' />
        <FormComp textField={"address:"} stringSetter={setAddress} textDisplay='block' textDisplaymd='flex' />
        <FormComp textField={"city:"} stringSetter={setCity} textDisplay='block' textDisplaymd='flex' />
        <FormComp textField={"postal code:"} stringSetter={setPostalCode} textDisplay='block' textDisplaymd='flex' />

        <FormComp button1={<ButtonComp text={"save"} bground={"bg-[#ec8951]"} textFill={"text-white"} performFunction={addUserHandler} />} />
      </div>
    </div>
  )
}
