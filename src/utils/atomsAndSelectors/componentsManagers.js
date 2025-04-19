import { atom } from "recoil";


export const activeSideBarMenu = atom({
    key: "isActive",
    default: "dashboard"
})

export const sidebar = atom({
    key: "sidebarstate",
    default: true
})

