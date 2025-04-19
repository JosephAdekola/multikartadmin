import React from 'react'
import { useNavigate } from 'react-router-dom'
import { sidebar } from '../utils/atomsAndSelectors/componentsManagers'
import { useSetRecoilState } from 'recoil'

export default function SideBarSubmenus({condi1, condi2, theArray = []}) {
    const setSideBarState = useSetRecoilState(sidebar)
    const navigate = useNavigate()
    return (
        <div className={`${condi1 ? 'hidden' :
            condi2 ? 'hidden' : ''}
        capitalize text-sm text-gray-300
        pl-20`}>
            <ul className=' flex flex-col gap-3 '>
                {
                    theArray.map((sub, index)=>{
                        return(
                            <li key={index}
                                className=' cursor-pointer '
                                onClick={()=>{navigate(sub.menu.replace(/\s/g, '')); setSideBarState(false) }}>
                                {sub.menu}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
