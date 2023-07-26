

function Form({style}) {
  return (


    <div className={`shrink my-3 m-auto mx-auto flex justify-center items-center  sm:w-[90vw] ${style}`}>


     
      <div className=" w-[90%] flex items-center justify-center p-auto">
        <div className="bg-white w-full m-auto p-8 rounded-lg shadow-md ">
          <form>

          <div>
        <p className="text-2xl font-bold mb-4">Customer Auth Form </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum cumque itaque incidunt maxime dolorem exerc</p>
        
      </div>


            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" type="text" id="name" name="name" placeholder="Enter your name"
              />
            </div>





            <div className="mb-4 d flex flex-row">

              <div className="flex flex-col mx-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Country
              </label>
              <select className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none">
    <option value="india">India</option>
    <option value="Usa">USA</option>
    <option value="Australlia">Australlia</option>
    <option value="Canada">Canada</option>
  </select>
                         
                         </div>






              <div className='flex flex-col mx-2'>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Locality
              </label>
              <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" type="text"  placeholder="Enter Address Line One "
              />
              </div>

              <div className='flex flex-col mx-2'>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" type="text"  placeholder="Enter your name"
              />
              </div>

            </div>







            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" type="email" id="email" name="email" placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" type="text" id="name" name="name" placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" type="text" id="name" name="name" placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" type="email" id="email" name="email" placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" id="message" name="message" rows="4" placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Form
