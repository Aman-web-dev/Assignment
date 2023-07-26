import Image from "next/image"
import Link from 'next/link';


import Mountain from "../components/Assests/mountain.jpg"

// items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600

function login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-300 to-white-200">


    
      <div className="w-[90%] lg:w-[60vw]  h-auto  bg-white p-6 rounded-lg shadow-lg flex md:flex-row flex-col">
        <div className="md:w-1/2 sm-h-[0%]">
 
          <Image src={Mountain} alt="Mountains" className="w-full sm-h-[0%] h-full object-cover rounded-l-lg md:rounded-l-none md:rounded-t-lg" />
        </div>
        <div className="md:w-1/2 md:p-8">

          <h2 className="text-3xl font-semibold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
               Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:shadow-outline"
                type="text"
                id="username"
                placeholder="Enter Random email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password:
              </label>
              <input
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                placeholder="Enter random Password"
              />
            </div>



  
             


  <Link className=" flex text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" href='/mainpage'><button
              className="w-full px-4 py-2 bg-white-500 border border-black text-black bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login Now
            </button></Link>
              
    
            <div className="my-4 flex md:flex-row flex-col flex items-center justify-center">

            <p className="text-gray-400">--------or------</p>

            </div>
          </form>

         
          <div className="my-4 flex md:flex-row flex-col">

          <button
              className="w-full px-4 py-2 bg-white-500 border border-black text-black bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register Now
            </button>
          </div>
        </div>
      

      </div>

</div>


  )
}

export default login
