import React from 'react'
import {BiHomeAlt} from 'react-icons/bi'
import {FiLayers} from 'react-icons/fi'
import {CiSearch} from 'react-icons/ci'
import {FiMessageCircle} from 'react-icons/fi'
import {BsPeople} from 'react-icons/bs'
import {FiBook} from 'react-icons/fi';
import {FiShoppingBag} from 'react-icons/fi';
import {BiEqualizer} from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between ml-3 h-screen w-32 p-8 '>
      <div>
      <img src='/alura.png' alt='Image' width={25} height={30} />
      <BiHomeAlt size={28} className='mt-8 text-gray-600 '/>
      <FiLayers size={28} className='mt-8 text-gray-600 '/>
      <CiSearch size={28} className='mt-8 text-gray-600 '/>
      <BiEqualizer size={28} className='mt-8 text-gray-600 '/>
      <FiMessageCircle className='mt-8 text-gray-600 ' size={28}/>
      <BsPeople className='mt-8 text-gray-600 ' size={28}/>
      </div>
      <div>
      <FiBook className='mt-8 text-gray-600 ' size={28}/>
      <FiShoppingBag className='mt-8 text-gray-600 ' size={28}/>
      <div className=' bg-gray-200 flex justify-center mt-8 py-2 mr-6 rounded-full'><h1 className='text-lg text-gray-400 font-semibold'>G</h1></div>
      </div>
    </div>
  )
}

export default Sidebar