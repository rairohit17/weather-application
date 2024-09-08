import { atom } from "recoil";

export const weatherState= atom({
    key:"weather",
    default:{}
}) 
export const valuesState= atom({
    key:"values",
    default:[]
})
export const placeState= atom({
    key:"place",
    default:"pune"
})
export const locationState= atom({
    key : "location",
    default:""
})





