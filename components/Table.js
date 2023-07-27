"use client"
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const Table = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const customers = [
    { id: 1, date: "12-07-2023", name: "Alice Johnson", email: "alijo@mail.com" },
    { id: 2, date: "12-07-2023", name: "Bob Smith", email: "b@mail.com" },
    { id: 3, date: "12-07-2023", name: "Charlie Williams", email: "charlwil@mail.com" },
    { id: 4, date: "12-07-2023", name: "David Brown", email: "dav@mail.com" },
    { id: 5, date: "12-07-2023", name: "Ella Davis", email: "el@mail.com" },
    { id: 6, date: "12-07-2023", name: "Frank Martinez", email: "framar@mail.com" },
    { id: 7, date: "12-07-2023", name: "Grace Anderson", email: "graand@mail.com" },
    { id: 8, date: "12-07-2023", name: "Henry Thompson", email: "hentho@mail.com" },
    { id: 9, date: "12-07-2023", name: "Isabella Hernandez", email: "isabelhern@mail.com" },
    { id: 10, date: "12-07-2023", name: "Jack Wilson", email: "jaw@mail.com" },
    { id: 11, date: "12-07-2023", name: "Katherine Lewis", email: "katheri@mail.com" },
    { id: 12, date: "12-07-2023", name: "Liam Turner", email: "lit@mail.com" },
    { id: 13, date: "12-07-2023", name: "Mia Scott", email: "m@mail.com" },
    { id: 14, date: "12-07-2023", name: "Noah Robinson", email: "norob@mail.com" },
    { id: 15, date: "12-07-2023", name: "Olivia Green", email: "oliv@mail.com" },
    { id: 16, date: "12-07-2023", name: "Patrick Hall", email: "patr@mail.com" },
    { id: 17, date: "12-07-2023", name: "Quinn Adams", email: "qui@mail.com" },
    { id: 18, date: "12-07-2023", name: "Ryan Carter", email: "ryc@mail.com" },
    { id: 19, date: "12-07-2023", name: "Sophia King", email: "sop@mail.com" },
    { id: 20, date: "12-07-2023", name: "Thomas Hall", email: "tho@mail.com" },
    { id: 21, date: "12-07-2023", name: "Uma Adams", email: "u@mail.com" },
    { id: 22, date: "12-07-2023", name: "Vincent Baker", email: "vince@mail.com" },
    { id: 23, date: "12-07-2023", name: "Willow Lee", email: "wi@mail.com" },
    { id: 24, date: "12-07-2023", name: "Xavier Hall", email: "xav@mail.com" },
    { id: 25, date: "12-07-2023", name: "Yara Adams", email: "ya@mail.com" },
    { id: 26, date: "12-07-2023", name: "Zane Lopez", email: "za@mail.com" },
    { id: 27, date: "12-07-2023", name: "Ava Campbell", email: "acam@mail.com" },
    { id: 28, date: "12-07-2023", name: "Benjamin White", email: "benjam@mail.com" },
    { id: 29, date: "12-07-2023", name: "Charlotte Turner", email: "charlott@mail.com" },
    { id: 30, date: "12-07-2023", name: "Daniel Martin", email: "danim@mail.com" },
  ];
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const indexOfLastCustomer = currentPage * itemsPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - itemsPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setPageNumber(pageNumber + 1)
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setPageNumber(pageNumber - 1)

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

      <table className=" border-collapse border lg:w-[80vw] w-[70vw]  p-4 m-4 shadow-md bg-white rounded-lg h-80">
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
          <FaChevronLeft />
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
          {pageNumber + 1}
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2  text-black font-bold rounded-lg"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Table;
