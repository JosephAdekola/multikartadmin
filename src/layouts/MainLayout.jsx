import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import { useRecoilState } from 'recoil'
import { sidebar } from '../utils/atomsAndSelectors/componentsManagers'

export default function MainLayout() {

    const [sideBarState, setSideBarState] = useRecoilState(sidebar)

    return (
        <div>
            <div className=' w-full min-h-[100vh] flex relative '>
                <div className={`max-w-[500px] h-[100vh] bg-gray-900 overflow-y-scroll custom-scrollbar
                            ${!sideBarState && ('hidden')} absolute top-0 left-0 md:relative z-10 `}>
                    <SideBar />
                </div>
                <div className=' w-full min-h-[100vh] bg-gray-100 '>
                    <nav>
                        <Header sideDisplay={setSideBarState} status={sideBarState} />
                    </nav>
                    <main className=' h-[75vh] p-5 overflow-y-scroll '>
                        <Outlet />
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        </div>
    )
}
