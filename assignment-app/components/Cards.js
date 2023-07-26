
import React from 'react'

import Image from 'next/image'


import { Shop, Align , Bag , Customer  } from "./Assests/Assests"

import Burger from "./Assests/burger.png"
function Cards() {
  return (
            <div className=' m-auto grid lg:grid-cols-4 grid-cols-2 gap-4 p-2 w-[80vw]'>


        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-2 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-xl font-bold'>$1,437,</p>
                <p className='text-gray-600'>YTD Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                </p>
        </div>  
        
       <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-2 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-xl font-bold'>$1,437,876</p>
                <p className='text-gray-600'>YTD Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>

            </p>

        </div>



        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-2 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-xl font-bold'>$1,437,</p>
                <p className='text-gray-600'>YTD Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                </p>
        </div>  



        <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-2 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-xl font-bold'>$1,437,876</p>
                <p className='text-gray-600'>YTD Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>

            </p>
        </div>  
    </div>
    )
}

export default Cards
