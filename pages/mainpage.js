import React from 'react';

import Head from 'next/head';
import Image from 'next/image';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Cards';
import Form from '../components/Form';

import SmallForm from '../components/SmallForm'
import Table from '../components/Table';



function mainpage() {
  return (
    
      
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
      <main className='bg-gray-100 min-h-screen'>
<Sidebar/>
        <Navbar/>
        <Card/> 

        <Table/>
        <Form style={"w-[100%]"}/>
 
        <div className=' m-auto grid lg:grid-cols-2 grid-cols-1 gap-4 p-2'>

      <div className=" w-[80%] flex m-auto items-center justify-center p-auto">
        <SmallForm/>
        </div>
        <div className=" w-[100%] h-full flex items-center justify-center p-auto">
         
         <Form/>

         </div>

    </div>
      </main>

    </>
  );
  
}

export default mainpage



      {/* <Form style={"w-[65vw] p-1"}/> */}