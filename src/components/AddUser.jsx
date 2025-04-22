import React from 'react'
import HeadAndDesc from './HeadAndDesc'
import FormComp from './FormComp'
import ButtonComp from './ButtonComp'

export default function AddUser() {
  return (
    <div>
        <div>
            <HeadAndDesc head={"create user"} />
        </div>

        <div className=' bg-white py-5 my-5 '>
            <FormComp textField1={"first name:"} display11='block' display12='flex'
                textField2={"last name:"} display21='block' display22='flex'
                textField3={"email:"} display31='block' display32='flex'
                textField4={"password:"} display41='block' display42='flex'
                textField5={"confirm password:"} display51='block' display52='flex'
                button1={ <ButtonComp text={"save"} bground={"bg-[#ec8951]"} textFill={"text-white"} /> } />
        </div>
    </div>
  )
}
