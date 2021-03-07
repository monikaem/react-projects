import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {AppContext, useGlobalContext} from "./context";
import App from "./App";

const Home = () => {
  const {openSidebar, openModal} = useGlobalContext();  //custom hook

  return (
  <main>
    <button className='sidebar-toggle' onClick={openSidebar}><FaBars/></button>
    <button className='btn' onClick={openModal}>show modal</button>
  </main>
  )
}

export default Home
