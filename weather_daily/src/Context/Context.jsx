import React from "react"
import {  createContext } from "react"
import { cities } from "../LocalApi/Local_API";

export const myContext = createContext();

const Context = (props) => {


    const deneme = {
        cities
    }
    

  return (
    <myContext.Provider value = {deneme}>
       {props.children} 
    </myContext.Provider>
  )
}
export default Context