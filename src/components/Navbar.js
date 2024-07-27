import React from 'react'
import { FaGlobeAmericas } from "react-icons/fa";

export default function Navbar(){
  return(
    <div className='nav'>
      <FaGlobeAmericas className='globe' />
      <p className='nav-text'>my travel journal</p>
    </div>
  )
}