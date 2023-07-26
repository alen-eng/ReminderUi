
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {FiChevronDown} from 'react-icons/fi';
import {TiArrowUnsorted} from 'react-icons/ti';
import { useState } from 'react';

function App() {
  const data=[
    {
      name:"Maria",
      orderId:"#27466680",
      date:"Aug 05 2020",
      Review:"Good",
      status:"Send Now"
    },
    {
      name:"Linda",
      orderId:"#2099330",
      date:"Aug 25 2021",
      Review:"Good",
      status:"Send Now"
    },
    {
      name:"Cynthia",
      orderId:"#2246780",
      date:"Oct 05 2022",
      Review:"Good",
      status:"Send Now"
    },
    {
      name:"Thomas",
      orderId:"#1109760",
      date:"Jan 05 2023",
      Review:"None",
      status:"Send Now"
    },
  ];

  const [showFilter, setshowFilter] = useState(false);

  return (
    <div className="bg-white ">

{/* place item start */}
 <div className='flex'> 
<div>
    <Sidebar/>
</div>
    <div className='pt-10 w-full'>
     <Header/> 
         <div className=''>
          <div className=' grid grid-cols-4 pt-16 xl:pl-44 lg:pl-24 md:pl-14 sm:ml-16  '>
           
            <div>
             <div className=' flex flex-row items-center'>
               <div className='uppecase text-gray-300 font-bold font-sans'>Review Rate</div> 
               <AiOutlineInfoCircle className='ml-1 text-gray-400' size={12} />
               </div> 
               <div className='text-xl pt-2 font-bold text-gray-800 '>
                19.12%
                </div>
                </div>

         <div>
            <div className=' flex flex-row items-center'>
            <div className='uppecase text-gray-300 font-bold font-sans'>Review Score</div>
            <AiOutlineInfoCircle className='ml-1 text-gray-400' size={12} />
            </div>
            <div className='text-xl pt-2 font-bold text-gray-800'>
                4.9
                </div>
                </div>

          <div>
          <div className='flex flex-row items-center'>
            <div className='uppecase text-gray-300 font-bold font-sans'>Total Review</div>
            <AiOutlineInfoCircle className='ml-1 text-gray-400' size={12} />
          </div>
          <div className='text-xl pt-2 font-bold text-gray-800'>
                1160
                </div>
                </div>

          <div>
          <div className='flex flex-row items-center'>
            <div className='uppecase text-gray-300 font-bold font-sans'>Send Now</div>
            <AiOutlineInfoCircle className='ml-1 text-gray-400' size={12}/>
            </div>
            <div className='text-xl pt-2 font-bold text-gray-800'>
                176
                </div>
                </div>

          </div>

          <div className='flex justify-between  pt-24 xl:pl-44 xl:pr-56 lg:pl-24 lg:pr-32 md:pl-14 sm:ml-16'>
              <div  className='font-bold text-lg text-gray-700'>Follow up</div>
              <div className=' flex flex-row'>
              <div className='text-sm font-bold font-sans text-gray-500 cursor-pointer'><span className='bg-gray-100 p-1 rounded text-gray-400 mr-1 font-sans font-semibold' onClick={()=>{setshowFilter(!showFilter); console.log("podaa")}}>Filter:</span>Send now(176)</div>
              <FiChevronDown className='text-gray-600 ml-1' size={20}/>
             { showFilter && (
              <div className='absolute cursor-pointer bg-white border border-gray-300  shadow-lg rounded-lg mt-6 py-4 px-2'>
                <div className='flex flex-col'>
                  <h2 className='pt-2 px-4 text-slate-500 text-base font-normal'>All orders <span className='rounded-full ml-2 px-2 py-[0.5] bg-gray-300 text-semibold text-gray-600'>16</span></h2>
                  <h2 className='pt-3 px-4 text-slate-500 text-base font-normal'>Ignored <span className='rounded-full ml-2 px-2 py-[0.5] bg-gray-300 text-semibold text-gray-600'>4</span></h2>
                  <h2 className='pt-3 px-4 text-slate-500 text-base font-normal'>Scheduled <span className='rounded-full ml-2 px-2 py-[0.5] bg-gray-300 text-semibold text-gray-600'>0</span></h2>
                  <h2 className='pt-3 px-4 text-slate-500 text-base font-normal'>Send Now <span className='rounded-full ml-2 px-2 py-[0.5] bg-gray-300 text-semibold text-gray-600'>6</span></h2>
                  <h2 className='pt-3 px-4 text-slate-500 text-base font-normal'>Completed <span className='rounded-full ml-2 px-2 py-[0.5] bg-gray-300 text-semibold text-gray-600'>6</span></h2>
                  </div>
                <div/> </div> )
                }
              </div>

          </div>
        


          <div className='w-full  flex place-content-center grid-rows-4 px-12 justify-evenly  pt-12  '>  
          
          <div className='uppercase font-bold font-sans text-xs text-gray-400 flex flex-row items-center'>
            <div className='bg-gray-200 w-4 h-4 rounded-full mr-6 '></div>Customer <TiArrowUnsorted/>
            </div>
          
          <div className='uppercase flex flex-row items-center font-bold font-sans text-xs text-gray-400 gap-1'>Order Id <TiArrowUnsorted/></div>
          
           <div className='uppercase flex flex-row items-center font-bold font-sans text-xs text-gray-400 gap-1'>Date <TiArrowUnsorted/></div>
          
           
           <div className='uppercase flex flex-row items-center font-bold font-sans text-xs text-gray-400 gap-1'>Review <TiArrowUnsorted/></div>
           
           
           <div className='uppercase flex flex-row items-center font-bold font-sans text-xs text-gray-400 gap-1'>Status <TiArrowUnsorted/></div>

          </div>
        {data?.map((item)=>{
          return(
          <div className='w-full  flex place-content-center grid-rows-4 px-12 justify-evenly  pt-12  '>  
          
          <div className=' font-bold font-sans text-xs text-slate-600 flex flex-row items-center pr-11'>
            <div className='bg-gray-200 w-4 h-4 rounded-full mr-6'></div> {item.name}
            </div>
          
          <div className=' flex flex-row items-center font-bold font-sans text-xs text-slate-600 gap-1'>{item.orderId} </div>
          
           <div className=' flex flex-row items-center font-bold font-sans text-xs text-slate-600 gap-1'>{item.date} </div>
          
           
           <div className=' flex flex-row items-center font-bold font-sans text-xs bg-slate-100 rounded p-1 text-gray-400 gap-1'>{item.Review}</div>
           
           
           <div className=' flex flex-row items-center font-bold font-sans text-xs text-slate-600 gap-1'>
           <div className='bg-yellow-400 w-3 h-3 rounded-full mr-2 '></div>
            {item.status}</div>

          </div> )
        })}
          

          </div>
    </div>
   </div> 
      
     

    </div>
  );
}

export default App;
