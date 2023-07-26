
import React from 'react'

import Image from 'next/image'

import {FaPencilAlt,FaAppStore,FaAlignLeft,FaUser } from 'react-icons/fa';



import{FaAiFillAppstore} from 'react-icons/fa'


import Burger from "./Assests/burger.png"
function Cards() {
  return (
            <div className=' m-auto grid lg:grid-cols-4  grid-cols-1 gap-2 p-2 w-[90vw]'>


        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-2 rounded-lg'>
            <div className='flex flex-col w-full pb-2'>
                <p className='text-xl font-bold'>1,437,</p>
                <p className='text-gray-600'>Reviews</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <FaPencilAlt/>
                </p>
        </div>  
        
       <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-2 rounded-lg'>
            <div className='flex flex-col w-full pb-2'>
                <p className='text-xl font-bold'>₹1,437,876</p>
                <p className='text-gray-600'>Total Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
         <FaAppStore/>
            </p>

        </div>



        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-2 rounded-lg'>
            <div className='flex flex-col w-full pb-2'>
                <p className='text-xl font-bold'>₹1,437,</p>
                <p className='text-gray-600'>Booked Profit</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
         <FaAlignLeft />

                </p>
        </div>  



        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-2 rounded-lg'>
            <div className='flex flex-col w-full pb-2'>
                <p className='text-xl font-bold'>1,437,876</p>
                <p className='text-gray-600'>Customer Count</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
         <FaUser />
                        
                  </p>
        </div>  
    </div>
    )
}

export default Cards
