import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import { useRecoilState, useRecoilValue } from 'recoil'
import { sidebar } from '../utils/atomsAndSelectors/componentsManagers'
import { userAuth } from '../utils/atomsAndSelectors/userAtoms'



export default function MainLayout() {

    const getUser = useRecoilValue(userAuth)
    

    const [sideBarState, setSideBarState] = useRecoilState(sidebar)

    return (
        <div className='   '>
            <div className=' w-full min-h-[100vh] flex relative '>
                <div className={`max-w-[300px] min-w-[300px] h-[100vh] bg-gray-900 overflow-y-scroll custom-scrollbar
                            ${!sideBarState && ('hidden')} absolute top-0 left-0 md:relative z-10 `}>
                    <SideBar />
                </div>
                <div className=' w-full min-h-[100vh] bg-gray-100 overflow-hidden '>
                    <nav>
                        <Header sideDisplay={setSideBarState} status={sideBarState} />
                    </nav>
                    <main className=' h-[75vh] p-2 md:p-5 overflow-y-scroll custom-scrollbar w-full '>
                        <div className=' w-full '>
                            <Outlet />
                        </div>
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        </div>
    )
}
