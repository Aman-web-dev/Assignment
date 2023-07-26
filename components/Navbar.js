
import Link from 'next/link';

import {FaPowerOff} from 'react-icons/fa'

function Navbar() {
  return (
    <div className=' m-auto grid lg:grid-cols-1 grid-cols-1 gap-2 p-2 w-[90vw]'>



<div className='shrink lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-2 rounded-lg'>
            <div className='flex align-center flex-row lg:w-full w-0 gap-5 pb-2'>
                <p className='text-xl my-1  font-bold'>+Add New Item</p>

            </div>
            <p className='bg-blue-200  flex justify-center items-center p-2 rounded-lg'>
               <Link className='font-bold ' href={"/"}>Logout</Link>
                </p>
        </div> 



      </div>
  )
}

export default Navbar
