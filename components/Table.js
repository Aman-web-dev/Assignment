"use client"


import { useState } from 'react';

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'


const Table = () => {



    const customers=[

        { id: 1,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 2,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 3,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 4,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 5,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 6,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 7,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 8,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 9,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 10,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 11,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 12,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 13,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 14,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 15,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 16,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 17,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 18,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 19,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 20,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 21,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 22,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 23,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 24,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 25,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 26,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 27,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 28,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 29,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 30,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 31,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 32,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 33,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 34,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
        { id: 35,date:"12-07-2023", name: 'John Doe',          email: 'lorem2@example.com' },
        { id: 36,date:"12-07-2023", name: 'Jane Smith',          email: 'lorem2@example.com' },
      
    ]
    const itemsPerPage=10;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(customers.length / itemsPerPage);

  const indexOfLastCustomer = currentPage * itemsPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={`shrink bg-white rounded-lg p-2 my-3 m-auto mx-auto flex flex-col justify-center items-center  sm:w-[90vw] `}>



        <div className="bg-white w-full m-auto p-8 rounded-lg  ">
       

       
        <p className="text-2xl font-bold mb-4">Customer Login Details </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum cumque itaque incidunt maxime dolorem exerc</p>
        <div className="bg-red-100 m-2 border border-red-500 text-red-700 px-4 py-2 rounded-lg">
    <p>This is a danger message. Something went wrong!</p>
  </div>
      </div>

      <table className=" border-collapse border lg:w-[80vw] p-4 m-auto shadow-md bg-white rounded-lg h-80">
        <thead>
          <tr className="bg-gray-500">
            <th className="border border-gray-400  px-4 py-2">ID</th>
            <th className="border border-gray-400  px-4 py-2">Name</th>
            <th className="border border-gray-400  px-4 py-2">Email</th>


          </tr>
        </thead>
        <tbody>
          {currentCustomers.map((customer) => (
            <tr key={customer.id}>
              <td className="border border-gray-400   px-4 py-2">{customer.id}</td>
              <td className="border border-gray-400   px-4 py-2">{customer.name}</td>
              <td className="border border-gray-400   px-4 py-2">{customer.email}</td>

                            
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between gap-2 mt-4"> 
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg"
        >
          <FaChevronLeft/>
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg"
        >
          <FaChevronRight/>
        </button>
      </div>
    </div>
  );
};

export default Table;
