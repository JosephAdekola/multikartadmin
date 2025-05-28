import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";


const { persistAtom } = recoilPersist({
    key: "user",
    storage: localStorage
});

export const userAuth = atom({
    key: "userAuth",
    default: {},
    effects_UNSTABLE: [persistAtom]
})