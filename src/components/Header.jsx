import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
const Header = () => {
  return (
     <div className=' flex flex-row  place-content-between py-5 xl:px-52 lg:px-32 md:px-20 sm:px-12' >

      <div className=''>
        <h1 className='text-[11px] text-gray-500 font-bold uppercase font-sans '>Get more Reviews</h1>
        <h1 className='text-3xl text-gray-800 font-bold font-sans'>Followup Reminder</h1>
      </div>

        <div className='flex px-2  gap-1 items-center'>
          <AiOutlineInfoCircle className='text-gray-400' size={12} />
          <h4 className=' text-gray-400 font-semibold text-sm'> Updated 8 hours ago </h4>  
          <button className='bg-[#3784db] rounded-md ml-2 px-8 py-3 font-sans text-white text-sm font-semibold'>Settings</button>
          
     </div>

     </div>
  )
}

export default Header