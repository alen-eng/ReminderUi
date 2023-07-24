import React from 'react'
import {BiHomeAlt} from 'react-icons/bi'
import {FiLayers} from 'react-icons/fi'
import {CiSearch} from 'react-icons/ci'
import {FiMessageCircle} from 'react-icons/fi'
import {BsPeople} from 'react-icons/bs'
import {BiEqualizer} from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className=' ml-3 h-screen w-32 p-8 '>
      <img src='/alura.png' width={25} height={30} />
      <BiHomeAlt size={28} className='mt-8 text-gray-600 '/>
      <FiLayers size={28} className='mt-8 text-gray-600 '/>
      <CiSearch size={28} className='mt-8 text-gray-600 '/>
      <BiEqualizer size={28} className='mt-8 text-gray-600 '/>
      <FiMessageCircle className='mt-8 text-gray-600 ' size={28}/>
      <BsPeople className='mt-8 text-gray-600 ' size={28}/>
    </div>
  )
}

export default Sidebar