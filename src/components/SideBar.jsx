import React from 'react'
import multikartLogo from '../assets/multikart-logo.png'
import { useNavigate } from 'react-router-dom'
import { activeSideBarMenu, sidebar } from '../utils/atomsAndSelectors/componentsManagers'
import { useRecoilState, useSetRecoilState } from 'recoil'
import SideBarSubmenus from './SideBarSubmenus'

export default function SideBar() {
    
    const [isActive, setIsActive] = useRecoilState(activeSideBarMenu)
    const setSideBar = useSetRecoilState(sidebar)

    const navigate = useNavigate()

    const sideMenu = [
        { id: 1, icon: "pi pi-warehouse", menu: "dashboard", hasSubMenus: false },
        { id: 2, icon: "pi pi-box", menu: "products", hasSubMenus: true },
        { id: 3, icon: "pi pi-shopping-cart", menu: "orders", hasSubMenus: true },
        { id: 4, icon: "pi pi-dollar", menu: "sales", hasSubMenus: true },
        { id: 5, icon: "pi pi-tag", menu: "coupons", hasSubMenus: true },
        { id: 6, icon: "pi pi-file", menu: "pages", hasSubMenus: true },
        { id: 7, icon: "pi pi-camera", menu: "media", hasSubMenus: false },
        { id: 8, icon: "pi pi-align-center", menu: "menus", hasSubMenus: true },
        { id: 9, icon: "pi pi-user", menu: "users", hasSubMenus: true },
        { id: 10, icon: "pi pi-users", menu: "login", hasSubMenus: true },
    ]

    const productsSubMenu = [
        {id: 1, menu:"add product"},
        {id: 2, menu:"edit product"},
        {id: 4, menu:"all product"}
    ]

    const orderSubMenu = [
        {id: 1, menu:"view orders"},
        {id: 1, menu:"order details"}
    ]

    const usersSubMenu = [
        {id: 1, menu:"all users"},
        {id: 2, menu:"add users"}
    ]

    return (
        <div>
            <div className=' w-full h-[15vh] border-b border-gray-700 flex '>
                <img src={multikartLogo} alt="multikart logo"
                    className=' w-[45%] h-[90%] object-contain mx-auto '
                    onClick={()=>{setIsActive('dashboard'); navigate('/')}} />
                <div className=' my-auto mx-auto text-4xl md:hidden '>
                <i className=' pi pi-times cursor-pointer text-white '
                    onClick={()=>setSideBar(false)}></i>
                </div>
            </div>

            <div>
                {
                    sideMenu.map((menu, index) => {
                        // #ec8951
                        return (
                            <div>
                                <div key={index} 
                                className={`${isActive == menu.menu ? "text-[#ec8951]":"text-white"} 
                                            capitalize flex justify-between p-5 `}>
                                <div className=' flex gap-5 '
                                    onClick={()=>{if (!menu.hasSubMenus) { navigate(`/${menu.menu}`); setSideBar(false)}; setIsActive(menu.menu)}}>
                                    <i className={`${menu.icon} my-auto`}></i>
                                    <p className=' text-xl cursor-pointer '>{menu.menu}</p>
                                </div>
                                <div className={`${!menu.hasSubMenus && ('hidden')}`}>
                                    <i className={`pi pi-angle-right`}></i>
                                </div>                                                                
                            </div>
                            {
                                <SideBarSubmenus condi1={isActive != menu.menu}
                                                condi2={!menu.hasSubMenus}
                                                theArray={menu.menu == "products" ? productsSubMenu :
                                                    menu.menu == "orders" ? orderSubMenu :
                                                    menu.menu == "users" ? usersSubMenu : []
                                                }/>
                            }                            
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
