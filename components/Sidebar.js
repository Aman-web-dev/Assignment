"use client"

import Image from "next/image";
import { useState } from 'react';

import { FaAlignJustify, FaArrowLeft } from "react-icons/fa";

const DropDown = ({ name = '' }) => {
    const [dropDownElem, setDropDown] = useState('hidden');

    const handleDropDown = () => {
        // Toggle the state between "hidden" and ""
        setDropDown(dropDownElem === 'hidden' ? '' : 'hidden');
    };

    return (
        <div className=" border-b border-white">
            <button
                onClick={handleDropDown}
                className="bg-black h-10 w-40 text-White rounded text-bold"
            >
                {name}
            </button>

            <div className={`bg-black z-10 fixed  h-10 w-40 ${dropDownElem}`}>
                <button onClick={handleDropDown} className="bg-black h-10 w-40 text-White rounded text-bold" >Navigate </button>
                <button onClick={handleDropDown} className="bg-black h-10 w-40 text-White rounded text-bold" >Navigate </button>
                <button onClick={handleDropDown} className="bg-black h-10 w-40 text-White rounded text-bold" >Navigate </button>
                <button onClick={handleDropDown} className="bg-black h-10 w-40 text-White rounded text-bold" >Navigate </button>
            </div>



        </div>
    );
}


function Sidebar({children = <></>}) {

const [navbar, setNav] = useState('hidden')


const handleNav=()=>{

    setNav(navbar === 'hidden' ? '' : 'hidden');


}



    return (

        
        <div>

            <div>

            <button className="fixed bg-black m-2 p-4  text-white rounded text-bold" onClick={handleNav}>
            <FaAlignJustify className="h-full w-full"/>
            </button>


            <nav className={`flex items-center bg-black text-white fixed h-screen w-60 p-4 flex flex-col ${navbar}`} >

                <button className="text-2xl" onClick={handleNav}><FaArrowLeft/></button>
                <div className="border-b border-black m-0 p-0 h-20 w-50 flex items-center justify-center">
                    <button className="bg-white h-10 w-40 text-black rounded text-bold">
                        +New Item
                    </button>
                </div>


                <div className=" border-b flex flex-col ">


                    <DropDown name="Dash Board" />
                    <DropDown name="Application" />
                    <DropDown name="Elements" />
                    <DropDown name="Forms" />
                    <DropDown name="Plugins" />
                    <DropDown name="Datagrid" />
                </div>


            </nav>

            </div>

            <div className=''>
            {children}
            </div>
        </div>
    )
}

export default Sidebar;
