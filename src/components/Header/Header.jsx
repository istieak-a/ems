import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Header = ({data}) => {
  // console.log(data); 
  return (
    <div className=' text-white flex justify-between items-end'>
        <h1 className='text-xl font-medium flex flex-col'>Hello, <span className='text-3xl font-bold'>{data.firstName} 👋</span></h1>
        <button className='bg-orange-700 px-5 py-1 rounded-lg font-semibold text-lg'>Log Out</button>
    </div>
  )
}

export default Header