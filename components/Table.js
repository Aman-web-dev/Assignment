"use client"


import { useState } from 'react';




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

  // Calculate the number of pages based on the number of customers and itemsPerPage
  const totalPages = Math.ceil(customers.length / itemsPerPage);

  // Get the current page's data based on itemsPerPage and currentPage
  const indexOfLastCustomer = currentPage * itemsPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Function to navigate to the next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to navigate to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex justify-center align-center my-4 mb-5 bg-white w-[90%] align-center p-4 flex-col rounded-lg m-auto  ">


      <div className='font-bold text-3xl m-2'> 
        <h1 >Login List</h1>
      </div>

      <div className=' text-1xl m-2'> 
        <p>This List Contains The  Number of Logins  On the Website </p>
      </div>

      <div className="bg-red-100 m-2 border border-red-500 text-red-700 px-4 py-2 rounded-lg">
    <p>This is a danger message. Something went wrong!</p>
  </div>

      <table className="border-collapse border w-auto p-4 bg-white rounded-lg h-80">
        <thead>
          <tr className="bg-gray-500">
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>


          </tr>
        </thead>
        <tbody>
          {currentCustomers.map((customer) => (
            <tr key={customer.id}>
              <td className="border border-gray-400 px-4 py-2">{customer.id}</td>
              <td className="border border-gray-400 px-4 py-2">{customer.name}</td>
              <td className="border border-gray-400 px-4 py-2">{customer.email}</td>

              
              

              
              
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
