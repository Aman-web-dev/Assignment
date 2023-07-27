"use client"


import { useState } from 'react';

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'


const Table = () => {

const [pageNumber,setPageNumber ]= useState(1)

  const customers = [
    { id: 1, date:  "12-07-2023", name: "Alice Johnson", email: "alijohnson@mail.com" },
    { id: 2, date:  "12-07-2023", name: "Bob Smith", email: "bsmith@mail.com" },
    { id: 3, date:  "12-07-2023", name: "Charlie Williams", email: "charlwilliams@mail.com" },
    { id: 4, date:  "12-07-2023", name: "David Brown", email: "davbrown@mail.com" },
    { id: 5, date:  "12-07-2023", name: "Ella Davis", email: "eldavis@mail.com" },
    { id: 6, date:  "12-07-2023", name: "Frank Martinez", email: "framartinez@mail.com" },
    { id: 7, date:  "12-07-2023", name: "Grace Anderson", email: "graanderson@mail.com" },
    { id: 8, date:  "12-07-2023", name: "Henry Thompson", email: "henthompson@mail.com" },
    { id: 9, date:  "12-07-2023", name: "Isabella Hernandez", email: "isabelhernandez@mail.com" },
    { id: 10, date: "12-07-2023", name: "Jack Wilson", email: "jawilson@mail.com" },
    { id: 11, date: "12-07-2023", name: "Katherine Lewis", email: "katherilewis@mail.com" },
    { id: 12, date: "12-07-2023", name: "Liam Turner", email: "liturner@mail.com" },
    { id: 13, date: "12-07-2023", name: "Mia Scott", email: "mscott@mail.com" },
    { id: 14, date: "12-07-2023", name: "Noah Robinson", email: "norobinson@mail.com" },
    { id: 15, date: "12-07-2023", name: "Olivia Green", email: "olivgreen@mail.com" },
    { id: 16, date: "12-07-2023", name: "Patrick Hall", email: "patrihall@mail.com" },
    { id: 17, date: "12-07-2023", name: "Quinn Adams", email: "quiadams@mail.com" },
    { id: 18, date: "12-07-2023", name: "Ryan Carter", email: "rycarter@mail.com" },
    { id: 19, date: "12-07-2023", name: "Sophia King", email: "sophking@mail.com" },
    { id: 20, date: "12-07-2023", name: "Thomas Hall", email: "thomhall@mail.com" },
    { id: 21, date: "12-07-2023", name: "Uma Adams", email: "uadams@mail.com" },
    { id: 22, date: "12-07-2023", name: "Vincent Baker", email: "vincebaker@mail.com" },
    { id: 23, date: "12-07-2023", name: "Willow Lee", email: "willlee@mail.com" },
    { id: 24, date: "12-07-2023", name: "Xavier Hall", email: "xavihall@mail.com" },
    { id: 25, date: "12-07-2023", name: "Yara Adams", email: "yaadams@mail.com" },
    { id: 26, date: "12-07-2023", name: "Zane Lopez", email: "zalopez@mail.com" },
    { id: 27, date: "12-07-2023", name: "Ava Campbell", email: "acampbell@mail.com" },
    { id: 28, date: "12-07-2023", name: "Benjamin White", email: "benjamwhite@mail.com" },
    { id: 29, date: "12-07-2023", name: "Charlotte Turner", email: "charlotturner@mail.com" },
    { id: 30, date: "12-07-2023", name: "Daniel Martin", email: "danimartin@mail.com" },
  ];
    const itemsPerPage=10;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(customers.length / itemsPerPage);

  const indexOfLastCustomer = currentPage * itemsPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setPageNumber(pageNumber+1)
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setPageNumber(pageNumber-1)

    }
  };

  return (
    <div className={`shrink bg-white rounded-lg p-2 my-3 m-auto mx-auto flex flex-col justify-center items-center  sm:w-[90vw] `}>



        <div className="bg-white w-full m-auto p-4 rounded-lg  ">
       

       
        <p className="text-2xl font-bold mb-4">Working Table </p>
        <p>I imported Some random emails and names created and array of objects and mapped all of the names and email</p>
        <div className="bg-red-100 m-2 border border-red-500 text-red-700 px-4 py-2 rounded-lg">
    <p>This is a danger message. Something went wrong!</p>
  </div>
      </div>

      <table className=" border-collapse border lg:w-[80vw]  p-4 m-4 shadow-md bg-white rounded-lg h-80">
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
              <td className="border border-gray-400 text-wrap   px-4 py-2">{customer.email}</td>

                            
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between gap-2 mt-4"> 
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2  text-black font-bold rounded-lg"
        >
          <FaChevronLeft/>
        </button>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border-4 font-bold rounded-lg"
        >
         {pageNumber}
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border-4 font-bold rounded-lg"
        >
          {pageNumber+1}
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2  text-black font-bold rounded-lg"
        >
          <FaChevronRight/>
        </button>
      </div>
    </div>
  );
};

export default Table;
