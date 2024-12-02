import React from 'react'

const Header = () => {
  return (
    <div className=' text-white flex justify-between items-end'>
        <h1 className='text-xl font-medium flex flex-col'>Hello, <span className='text-3xl font-bold'>Istieak 👋</span></h1>
        <button className='bg-orange-700 px-5 py-1 rounded-lg font-semibold text-lg'>Log Out</button>
    </div>
  )
}

export default Header